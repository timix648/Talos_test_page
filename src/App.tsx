import talosBanner from './assets/talos-banner.jpg'

function App() {
  return (
    <div className="bg-brand-bg h-screen w-full flex items-center justify-center p-4 md:p-8 font-sans">
      <main className="bg-white rounded-[2rem] shadow-soft max-w-6xl w-full h-auto md:min-h-[600px] flex flex-col md:flex-row overflow-hidden border border-white">
        
        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center relative bg-white z-20">
            
            <div className="absolute top-10 left-10 md:left-16 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold tracking-widest uppercase text-brand-muted">System Online</span>
            </div>

            <div className="mt-8 md:mt-0 space-y-6">
                <h1 className="text-5xl md:text-7xl font-black text-brand-dark tracking-tighter leading-[0.9]">
                    TALOS<br />SYSTEMS
                </h1>
                <p className="text-lg text-brand-muted max-w-md leading-relaxed">
                    Advanced infrastructure for the next generation of digital assets.
                </p>
                <div className="pt-4">
                    <button className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all">
                        Initialize Access
                    </button>
                </div>
            </div>
        </div>

        <div className="w-full md:w-1/2 relative bg-brand-dark overflow-hidden">
            <img 
                src={talosBanner} 
                alt="Talos Banner" 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent"></div>
        </div>

      </main>
    </div>
  )
}

export default App