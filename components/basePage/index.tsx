import Navigation from "../navigation"

interface BasePageProps{
    children: React.ReactNode
}

function BasePage({children}: BasePageProps) {
    return (
        <div className="flex min-h-screen">
            <Navigation />
            <main className="h-full w-4/5 p-5 max-w-full overflow-x-hidden">
                {children}
            </main> 
        </div>
    )
}

export default BasePage