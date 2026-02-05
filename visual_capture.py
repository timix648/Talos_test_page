
import asyncio
import json
import sys
import base64
from pathlib import Path

async def capture_visual_state(url: str, viewport_width: int = 1280, viewport_height: int = 720):
    """
    Captures the visual state of a web page.
    Returns screenshot as base64 and any console errors.
    """
    try:
        from playwright.async_api import async_playwright
    except ImportError:
        print(json.dumps({"error": "playwright not installed", "install": "pip install playwright && playwright install chromium"}))
        sys.exit(1)
    
    result = {
        "success": False,
        "screenshot_base64": None,
        "console_errors": [],
        "network_errors": [],
        "viewport": {"width": viewport_width, "height": viewport_height}
    }
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            viewport={"width": viewport_width, "height": viewport_height}
        )
        page = await context.new_page()
        
        # Capture console errors
        page.on("console", lambda msg: result["console_errors"].append({
            "type": msg.type,
            "text": msg.text
        }) if msg.type == "error" else None)
        
        # Capture network failures
        page.on("requestfailed", lambda req: result["network_errors"].append({
            "url": req.url,
            "failure": req.failure
        }))
        
        try:
            await page.goto(url, wait_until="networkidle", timeout=30000)
            
            # Take full-page screenshot
            screenshot_bytes = await page.screenshot(full_page=True)
            result["screenshot_base64"] = base64.b64encode(screenshot_bytes).decode("utf-8")
            result["success"] = True
            
            # Get page title and URL for context
            result["title"] = await page.title()
            result["final_url"] = page.url
            
        except Exception as e:
            result["error"] = str(e)
        
        await browser.close()
    
    print(json.dumps(result))
    return result

async def run_visual_test(test_script: str):
    """
    Runs a Playwright test script and captures results.
    """
    try:
        from playwright.async_api import async_playwright
    except ImportError:
        print(json.dumps({"error": "playwright not installed"}))
        sys.exit(1)
    
    result = {
        "passed": False,
        "screenshots": [],
        "errors": []
    }
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        
        try:
            # Execute the test script in a controlled environment
            exec_globals = {"browser": browser, "result": result, "asyncio": asyncio}
            exec(test_script, exec_globals)
            
            if "test" in exec_globals and asyncio.iscoroutinefunction(exec_globals["test"]):
                await exec_globals["test"]()
            
            result["passed"] = True
            
        except AssertionError as e:
            result["errors"].append({"type": "assertion", "message": str(e)})
        except Exception as e:
            result["errors"].append({"type": "exception", "message": str(e)})
        
        await browser.close()
    
    print(json.dumps(result))

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--url", help="URL to capture")
    parser.add_argument("--width", type=int, default=1280)
    parser.add_argument("--height", type=int, default=720)
    args = parser.parse_args()
    
    if args.url:
        asyncio.run(capture_visual_state(args.url, args.width, args.height))
