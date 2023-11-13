import Head from "next/head";
import Link from "next/link";

function AdminLayout({children,title,description,thumb}) {
    return (
        <div>
             <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="desc" />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={description}
        />
        <meta
          property="og:image"
          content={thumb}
        />
      </Head>
      <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-base-300">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2"><Link href={'/'}><img width={120} src="/logo.png" alt="" /></Link></div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <li><Link href={'/'}>Home</Link></li>
          <li><a>Navbar Item 2</a></li>
        </ul>
      </div>
    </div>
    {/* large side nav */}
   <div className="flex">
   <div className="flex-none hidden lg:block h-screen">
    <ul className="menu menu-compact p-4 w-56 min-h-full bg-base-100 border-r mr-4">
      {/* Sidebar content here */}
      <li><Link href={'/@dashboard'}>Dashboard</Link></li>
      <li><Link href={'/@dashboard/create'}>Create New Episode</Link></li>
      <li><Link href={'/@dashboard/categories'}>Categories</Link></li>
      <li><Link href={'/@dashboard/categories/create'}>Create Category</Link></li>
    </ul>
    </div>
    {/* Page content here */}
    {children}
   </div>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
      {/* Sidebar content here */}
      <li><Link href={'/@dashboard'}>Dashboard</Link></li>
      <li><Link href={'/@dashboard/create'}>Create New Episode</Link></li>
      <li><Link href={'/@dashboard/categories'}>Categories</Link></li>
      <li><Link href={'/@dashboard/categories/create'}>Create Category</Link></li>
    </ul>
  </div>
</div>
        </div>
    );
}

export default AdminLayout;