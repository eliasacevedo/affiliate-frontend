import { CrudBaseResult } from "./useCrudBase";

export interface SearchBaseProps {
    children: React.ReactNode,
}

function SearchBase({children}: SearchBaseProps) {
    return <>{children}</>
}

export default SearchBase