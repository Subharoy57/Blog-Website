"use client";
import {useState} from "react";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import ArticleCard from "./ArticleCard";
import ArticleModal from "./ArticleModal";

export default function ArticleGrid({blogs}:any){
 const[query,setQuery]=useState("");
 const[category,setCategory]=useState("All");
 const[active,setActive]=useState(null);
 const categories=["All",...new Set(blogs.map((b:any)=>b.category))];
 const filtered=blogs.filter((b:any)=>{
 const q=query.toLowerCase();
 return (b.title.toLowerCase().includes(q)||
 b.description.toLowerCase().includes(q)||
 b.content_text.toLowerCase().includes(q))
 &&(category==="All"||b.category===category)
 });
 return(<>
 <SearchBar query={query} setQuery={setQuery}/>
 <CategoryFilter categories={categories} active={category} setActive={setCategory}/>
 <p className="mb-4">{filtered.length} results found</p>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {filtered.map((b:any)=>(
 <ArticleCard key={b.id} blog={b} onClick={()=>setActive(b)}/>))}
 </div>
 {active&&<ArticleModal blog={active} onClose={()=>setActive(null)}/>}
 </>)
}