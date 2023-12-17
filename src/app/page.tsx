import { Producttype } from "@/types/ProductType"


async function getData() {
  const res = await fetch('https://fakestoreapi.com/products')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async  function Home() {
  const products = await getData()
  console.log(products)
  return (
    <div className="max-w-7 mx-auto pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        |{products.map((p: Producttype) => <div key={p.id}>{p.title}</div>)}
      </div>     
    </div>
  )
}
