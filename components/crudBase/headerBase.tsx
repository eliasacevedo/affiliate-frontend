export interface HeaderBaseProps {
    name: string,
    onCreate: () => void
}

function HeaderBase({name, onCreate}: HeaderBaseProps) {
    return (
        <div className="flex justify-between w-full items-center p-5 bg-cyan-500 mb-2 rounded-t">
            <h3 className="text-white font-bold text-2xl">{name}</h3>
            <button className="btn bg-green-800 hover:bg-green-900" onClick={onCreate}>Crear</button>
        </div>
    )
}

export default HeaderBase