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
              <h1 className="text-5xl md:text-7xl font-black text-brand-dark tracking-tighter leading-none">
                TALOS<br />SYSTEMS
              </h1>
              <p className="text-lg text-brand-muted max-w-md leading-relaxed">
                Next-generation infrastructure for the modern web. Secure, scalable, and lightning fast.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-brand-dark text-white rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg">
                  Initialize Core
                </button>
                <button className="px-8 py-4 bg-white text-brand-dark border-2 border-brand-dark rounded-full font-bold hover:bg-brand-dark hover:text-white transition-all">
                  Documentation
                </button>
              </div>
            </div>
        </div>

        <div className="w-full md:w-1/2 relative h-64 md:h-auto overflow-hidden">
          <img 
            src={talosBanner} 
            alt="Talos Banner" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent md:from-white/40"></div>
        </div>

      </main>
    </div>
  )
}

export default App