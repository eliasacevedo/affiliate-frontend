import Link from "next/link"

interface NavigationLinks{
    id: string,
    name: string,
    path: string,
}

const navigationLinks: NavigationLinks[] = [
    {
        id: "1",
        name: "Afiliados",
        path: "/affiliates",
    },
    {
        id: "2",
        name: "Planes",
        path: "/plans",
    },
    {
        id: "3",
        name: "Estados",
        path: "/status",
    }
]

function Navigation() {
    return (
        <div className="w-1/5 bg-cyan-800 text-white p-5 max-w-xs">
            <div className="nav--brand mb-10 font-bold text-3xl">
                <h1>Affiliates App</h1>
            </div>
            <nav className="flex flex-col">
                {   
                    navigationLinks.map(
                        (link) => <Link key={link.id} href={link.path}><a className="nav--links--link mb-5">{link.name}</a></Link>
                    )
                }
            </nav>
        </div>
    )
}

export default Navigation