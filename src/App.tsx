import talosBanner from './assets/talos-banner.jpg'

functin App() {
  return (
    <div className="bg-brand-bg h-screen w-full flex items-center justify-center p-4 md:p-8 font-sans">
      <main className="bg-white rounded-[2rem] shadow-soft max-w-6xl w-full h-auto md:min-h-[600px] flex flex-col md:flex-row overflow-hidden border border-white">
        
        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center relative bg-white z-20">
            
            <div className="absolute top-10 left-10 md:left-16 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold tracking-widest uppercase text-brand-muted">System Online</span>
            </di>

            <div className="mt-8 md:mt-0 space-y-6">
                <h1 className="text-4xl md:text-6xl font-extrabold text-brand-dark leading-tight tracking-tight">
                    TALOS is <br />
                    <span className="text-brand-accent">Active.</span>
                </h1>
                
                <p className="text-lg text-brand-muted leading-relaxed max-w-md">
                    The pipeline executed successfully. If you are seeing this interface, the automated deployment agent has done its job.
                </p>

                <div className="pt-4">
                    <span className="inline-flex items-center px-6 py-3 rounded-xl bg-brand-dark text-white font-medium shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 cursor-default">
                        Status: Healthy
                    </span>
                </div>
            </div>

            <div className="absolute bottom-10 left-10 md:left-16">
                <p className="text-sm font-medium text-brand-muted">
                    Engineered by <span className="text-brand-dark font-bold">0xGenZero</span>
                </p>
            </div>
        </div>

        <div className="w-full md:w-1/2 bg-gray-50 relative overflow-hidden h-[500px] md:h-auto">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-br from-indigo-100 to-purple-50 rounded-full opacity-50 blur-3xl"></div>
            
            <div className="absolute w-full h-full animate-phys-x will-change-transform">
                <div className="absolute w-full h-full animate-phys-y will-change-transform">
                    <div className="w-96 h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                        <img src={talosBanner} 
                             alt="TALOS Deployment Banner" 
                             className="w-full h-full object-cover block" />
                    </div>
                </div>
            </div>

        </div>

      </main>
    </div>
  )
}

export default App
