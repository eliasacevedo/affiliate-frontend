import Navigation from "../navigation"

interface BasePageProps{
    children: React.ReactNode
}

function BasePage({children}: BasePageProps) {
    return (
        <div className="flex min-h-screen">
            <Navigation />
            <main className="h-full w-full">
                {children}
            </main> 
        </div>
    )
}

export default BasePage