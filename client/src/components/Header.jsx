import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className=''>

            <header className='bg-slate-200 shadow-md '>
                <div className='flex justify-between items-center max-w-6xl p-3 mx-auto '>
                    <Link to={'/'}>
                        <h1 className='font-bold text-lg '>Auth App</h1>
                    </Link>
                    <ul className='flex gap-4'>
                        <Link to={'/'}>
                            <li>Home</li>
                        </Link>
                        <Link to={'/about'}>
                            <li>About</li>
                        </Link>
                        <Link to={'/sign-in'}>
                            <li>Sign In</li>
                        </Link>
                    </ul>
                </div>
            </header>

        </div>
    )
}
