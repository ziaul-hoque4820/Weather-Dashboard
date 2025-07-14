import React, { useState } from 'react'
import LogoImage from './LogoImage'
import Favourite from './Favourite'
import FavouriteListModal from './FavouriteListModal'
import Search from './Search'

function Header() {
    const [showfavModal, setShowFavModal] = useState(false);
    return (
        <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
            <nav className="container mx-auto px-5 flex items-center justify-between py-6">
                <LogoImage />
                <div className="flex items-center gap-4 relative">
                    <Search />
                    <Favourite onShow={() => setShowFavModal(!showfavModal)} />
                    {showfavModal && <FavouriteListModal />}
                </div>
            </nav>
        </header>
    )
}

export default Header