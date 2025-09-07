
const Component = () => {


return (
  <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-4 p-6">
        {/* Spinner */}
        <div className="relative">
          <div className="w-7 h-7 border-4 border-gray-200 rounded-full animate-spin border-t-sky-500" />
        </div>
        
        {/* Loading text */}
        <div className="text-center">
          <p className="text-lg font-semibold text-foreground sm:text-xl">
            Agent is building your UI
          </p>
        </div>
      </div>
    </div>

)
}

export default Component