import React from 'react';

const Header = () => {
    return (
        <header className="flex items-center justify-between text-gray-900 px-8 py-3 shadow-md">
            {/* 로고 */}
            <div id="logo" className="flex items-center gap-3">
                <img src="/logoMain.png" alt="HF Logo" className="w-12 h-12" />
                <p className="text-2xl font-extrabold tracking-tight">HealthFood</p>
            </div>

            {/* 메뉴 */}
            <nav id="nav" className="flex items-center space-x-12">
                <p className="text-lg font-medium hover:text-green-800 cursor-pointer transition-colors">
                    서비스 소개
                </p>
                <p className="text-lg font-medium hover:text-green-800 cursor-pointer transition-colors">
                    이용하기
                </p>
            </nav>
        </header>
    );
};

export default Header;
