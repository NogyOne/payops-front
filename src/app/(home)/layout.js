import Navbar from '@/components/Navbar'
import TitleBar from '@/components/TitleBar'

export default function Layout({ children }) {
    return (
        <div className='h-screen bg-[#EFEFEF] overflow-hidden'>
            <TitleBar/>
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