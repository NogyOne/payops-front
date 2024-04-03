import Navbar from '@/components/Navbar'

export default function Layout({ children }) {
    return (
        <div className='h-screen bg-[#EFEFEF]'>
            <header>
                <Navbar
                    name='German'
                    username='germangl' />
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}