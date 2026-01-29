export default function SearchBar({query,setQuery}:any){
 return(<input className="w-full p-2 border rounded mb-4"
 placeholder="Search articles..."
 value={query}
 onChange={e=>setQuery(e.target.value)} />)
}