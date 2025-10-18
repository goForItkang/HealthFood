import React from 'react';

const Footer = () => {
    return (
        <footer className='h-[100px] flex flex-col '>
            <div className='mt-4 flex justify-evenly '>
                <p className='w-[150px]'>이용약관</p>
                <p className='w-[150px]'>개인정보처리방침</p>
            </div>
        </footer>
    );
};

export default Footer;