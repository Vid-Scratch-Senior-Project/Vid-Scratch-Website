
export default function VideoCard() {
    return (
        <div className="relative w-[300px] h-[380px] group">
            {/* Back card — slides down on hover */}
            <div className="
                card absolute inset-0 z-10
                bg-base-200 border border-base-300 rounded-2xl shadow-xl overflow-hidden
                transition-transform duration-[420ms] ease-[cubic-bezier(0.34,1.26,0.64,1)]
                translate-y-0
                group-hover:translate-y-[220px]
            ">
                <div className="card-body gap-2 p-6">
                    <p className="text-xs mono text-base-content/30 uppercase tracking-widest">Related</p>
                    <h2 className="card-title text-base-content/50 text-lg">API Rate Limits</h2>
                    <p className="text-sm text-base-content/30">Document throttling behavior and backoff strategies.</p>
                </div>
            </div>

            {/* Front card — lifts slightly on hover */}
            <div className="
                card absolute inset-0 z-20
                bg-gradient-to-br from-emerald-950 to-teal-900
                border border-emerald-700/40 rounded-2xl shadow-2xl overflow-hidden cursor-pointer
                transition-transform duration-[420ms] ease-[cubic-bezier(0.34,1.26,0.64,1)]
                translate-y-0
                group-hover:-translate-y-1.5
            ">
                <div className="card-body gap-3 p-6">
                    
                </div>
            </div>
        </div>
    );
}