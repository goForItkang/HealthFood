import React from 'react';

const Body = () => {
    return (
        <div className="relative h-[700px] bg-cover bg-center bg-no-repeat"
             style={{
                 backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9C2S41XdFf6BwOmTmawbtUcWIHBRxO2KwnGjB8_4DRQ3Q-2wxwUq-wO5kcHBNKvklMqlptcgeahpDdQUhlLW-SpzDRMLFbGr9V39BiS7Lhy6Ze1r3oaCzPquQDL62Ped0ponZdbucSZX2BapkrzhQMg2bkQc7BuUpwqWTw8AzkDlXausODUWCjIYl6tcLimSKvujY1ZL2ojW66wxucbhk2LfLpy2OcpS14gbD5i0dPzDb9PyHiKa5UgGGy5RKQvEYa_qnkjYQwOA')"
             }}>

            {/* 배경 전용 필터 */}
            <div className="absolute inset-0 brightness-75 saturate-80 bg-black/40"></div>

            {/* 텍스트 */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                <p className="text-5xl font-black text-white drop-shadow-lg mb-6">
                    AI가 찾아주는 나만의 건강 레시피
                </p>
                <p className="text-lg font-medium text-gray-100 max-w-2xl leading-relaxed drop-shadow-md">
                    당신의 건강 목표와 식습관에 맞춰 AI가 새로운 식단과 레시피를 추천해드립니다. <br />
                    더 이상 고민하지 말고 지금 바로 시작해보세요!
                </p>
            </div>
        </div>
    );
};

export default Body;
