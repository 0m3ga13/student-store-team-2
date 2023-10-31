import Image from "next/image";
const ProductItem = ({ text, name, order_num, phone }) => {
    text = "requested";
    let textColorClass = "text-black"; // Default text color class
    if (text === "requested") {
        textColorClass = "text-blue-500"; // Change to blue for 'requested'
    } else if (text === "completed") {
        textColorClass = "text-red-500"; // Change to red for 'completed'
    } else if (text === "awaiting pickup") {
        textColorClass = "text-yellow-500"; // Change to yellow for 'awaiting pickup'
    }
    return (
        <div>
            <h5
                className={`flex items-center justify-center py-6 uppercase text-xs ${textColorClass}`}
            >
                {text}
            </h5>
            <div className='flex justify-start items-start'>
                <Image
                    src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'
                    alt='Product dress'
                    width={130}
                    height={235}
                />
                <div className='space-y-4'>
                    <h1 className='capitalize-words font-semibold tracking-wider text-title2 '>
                        {name}
                    </h1>
                    <div className='hidden md:block'>
                        <div className='flex justify-start space-x-8 md:space-x-8 text-xs'>
                            <p className='uppercase text-content  '>
                                borrowed for
                            </p>
                            <a href='#' className='hover:text-accent'>
                                <div className='flex justify-start items-start space-x-2'>
                                    <svg
                                        width='32'
                                        height='32'
                                        viewBox='0 0 32 32'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='transition-fill duration-300 hover:fill-blue-500'
                                    >
                                        <path
                                            d='M21.9722 12.8338C21.9722 14.4545 21.3284 16.0089 20.1823 17.155C19.0363 18.301 17.4819 18.9449 15.8611 18.9449C14.2403 18.9449 12.686 18.301 11.5399 17.155C10.3938 16.0089 9.75 14.4545 9.75 12.8338C9.75 11.213 10.3938 9.65861 11.5399 8.51256C12.686 7.3665 14.2403 6.72266 15.8611 6.72266C17.4819 6.72266 19.0363 7.3665 20.1823 8.51256C21.3284 9.65861 21.9722 11.213 21.9722 12.8338Z'
                                            fill='currentColor'
                                        />
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M15.2375 31.1547C7.08905 30.8277 0.583008 24.1177 0.583008 15.8891C0.583008 7.45119 7.42287 0.611328 15.8608 0.611328C24.2987 0.611328 31.1386 7.45119 31.1386 15.8891C31.1386 24.327 24.2987 31.1669 15.8608 31.1669C15.791 31.1673 15.7212 31.1673 15.6515 31.1669C15.5132 31.1669 15.375 31.1623 15.2375 31.1547ZM6.05704 25.5294C5.94281 25.2013 5.90393 24.8518 5.94328 24.5067C5.98263 24.1616 6.09921 23.8297 6.28435 23.5358C6.4695 23.2419 6.71846 22.9935 7.01275 22.809C7.30705 22.6245 7.63912 22.5086 7.98433 22.47C13.9396 21.8108 17.8186 21.8704 23.7449 22.4838C24.0905 22.5198 24.4234 22.6342 24.7182 22.8183C25.013 23.0023 25.2618 23.2513 25.4459 23.5461C25.6299 23.8409 25.7442 24.1738 25.7801 24.5195C25.816 24.8652 25.7726 25.2145 25.6531 25.5408C28.193 22.971 29.6153 19.5023 29.6108 15.8891C29.6108 8.29529 23.4546 2.13911 15.8608 2.13911C8.26697 2.13911 2.11079 8.29529 2.11079 15.8891C2.11079 19.6444 3.61641 23.0483 6.05704 25.5294Z'
                                            fill='currentColor'
                                        />
                                    </svg>
                                    <h2 className='uppercase '>ahmed</h2>
                                </div>
                            </a>

                            <a href='#' className='hover:text-accent'>
                                <div className='flex justify-start items-start space-x-2'>
                                    <svg
                                        width='34'
                                        height='33'
                                        viewBox='0 0 34 33'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='transition-fill duration-300 hover:fill-blue-500'
                                    >
                                        <path
                                            d='M15.2811 16.3615C15.2811 16.8173 15.4622 17.2545 15.7845 17.5768C16.1069 17.8992 16.544 18.0802 16.9999 18.0802C17.4557 18.0802 17.8929 17.8992 18.2152 17.5768C18.5375 17.2545 18.7186 16.8173 18.7186 16.3615C18.7186 15.9056 18.5375 15.4685 18.2152 15.1461C17.8929 14.8238 17.4557 14.6427 16.9999 14.6427C16.544 14.6427 16.1069 14.8238 15.7845 15.1461C15.4622 15.4685 15.2811 15.9056 15.2811 16.3615ZM22.4426 16.3615C22.4426 16.8173 22.6237 17.2545 22.946 17.5768C23.2683 17.8992 23.7055 18.0802 24.1613 18.0802C24.6172 18.0802 25.0543 17.8992 25.3767 17.5768C25.699 17.2545 25.8801 16.8173 25.8801 16.3615C25.8801 15.9056 25.699 15.4685 25.3767 15.1461C25.0543 14.8238 24.6172 14.6427 24.1613 14.6427C23.7055 14.6427 23.2683 14.8238 22.946 15.1461C22.6237 15.4685 22.4426 15.9056 22.4426 16.3615ZM8.11967 16.3615C8.11967 16.8173 8.30075 17.2545 8.62308 17.5768C8.94541 17.8992 9.38258 18.0802 9.83842 18.0802C10.2943 18.0802 10.7314 17.8992 11.0538 17.5768C11.3761 17.2545 11.5572 16.8173 11.5572 16.3615C11.5572 15.9056 11.3761 15.4685 11.0538 15.1461C10.7314 14.8238 10.2943 14.6427 9.83842 14.6427C9.38258 14.6427 8.94541 14.8238 8.62308 15.1461C8.30075 15.4685 8.11967 15.9056 8.11967 16.3615ZM31.7955 10.1453C30.9862 8.22249 29.8261 6.49658 28.3472 5.01416C26.8787 3.54032 25.1354 2.3688 23.216 1.56592C21.2466 0.73877 19.1555 0.319824 16.9999 0.319824H16.9283C14.7583 0.330566 12.6565 0.760254 10.6799 1.60531C8.77694 2.41642 7.04998 3.59002 5.59526 5.06071C4.13074 6.53955 2.98132 8.2583 2.1864 10.174C1.36283 12.1577 0.947469 14.2668 0.958211 16.4367C0.970361 18.9234 1.55867 21.3735 2.67696 23.5946V29.0373C2.67696 29.4741 2.8505 29.8931 3.1594 30.202C3.46829 30.5109 3.88725 30.6844 4.3241 30.6844H9.77039C11.9915 31.8027 14.4416 32.391 16.9283 32.4032H17.0035C19.1483 32.4032 21.2287 31.9878 23.1874 31.175C25.0971 30.3817 26.8339 29.2238 28.3007 27.7661C29.7795 26.3016 30.9432 24.59 31.7561 22.6815C32.6011 20.7049 33.0308 18.603 33.0415 16.4331C33.0523 14.2524 32.6298 12.1362 31.7955 10.1453ZM26.385 25.8289C23.8749 28.314 20.5448 29.6818 16.9999 29.6818H16.939C14.7798 29.6711 12.635 29.1339 10.7408 28.1242L10.44 27.9631H5.39832V22.9214L5.23718 22.6206C4.22742 20.7264 3.69031 18.5815 3.67957 16.4224C3.66524 12.8524 5.0295 9.50081 7.53243 6.9764C10.0318 4.45199 13.3726 3.0555 16.9426 3.04118H17.0035C18.7938 3.04118 20.5305 3.38851 22.1669 4.07601C23.7639 4.7456 25.1962 5.70882 26.4279 6.94059C27.6561 8.16878 28.6229 9.60465 29.2925 11.2017C29.9872 12.856 30.3345 14.6105 30.3274 16.4224C30.3059 19.9888 28.9058 23.3296 26.385 25.8289Z'
                                            fill='currentColor'
                                        />
                                    </svg>

                                    <h2>Send message</h2>
                                </div>
                            </a>
                            <a href='#' className='hover:text-accent'>
                                <div className='flex justify-start items-start space-x-2'>
                                    <svg
                                        width='38'
                                        height='41'
                                        viewBox='0 0 38 41'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='hover:fill-blue-500'
                                    >
                                        <g filter='url(#filter0_d_87_677)'>
                                            <path
                                                d='M29.991 23.3422L26.1104 22.8992C25.6541 22.8456 25.1916 22.8961 24.7577 23.0469C24.3237 23.1978 23.9296 23.445 23.6049 23.77L20.7937 26.5811C16.4567 24.3753 12.9315 20.8501 10.7257 16.5131L13.5521 13.6867C14.209 13.0297 14.5299 12.1131 14.4229 11.1811L13.9799 7.33112C13.8932 6.58584 13.5356 5.89843 12.9749 5.39978C12.4143 4.90113 11.6899 4.62606 10.9396 4.62696H8.29652C6.57013 4.62696 5.13402 6.06307 5.24096 7.78946C6.05069 20.8367 16.4854 31.2561 29.5174 32.0658C31.2437 32.1728 32.6799 30.7367 32.6799 29.0103V26.3672C32.6951 24.8242 31.534 23.5256 29.991 23.3422Z'
                                                fill='currentColor'
                                            />
                                        </g>
                                        <defs>
                                            <filter
                                                id='filter0_d_87_677'
                                                x='-3.38867'
                                                y='0.0283203'
                                                width='44.667'
                                                height='44.6665'
                                                filterUnits='userSpaceOnUse'
                                                color-interpolation-filters='sRGB'
                                            >
                                                <feFlood
                                                    flood-opacity='0'
                                                    result='BackgroundImageFix'
                                                />
                                                <feColorMatrix
                                                    in='SourceAlpha'
                                                    type='matrix'
                                                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                                    result='hardAlpha'
                                                />
                                                <feOffset dy='4' />
                                                <feGaussianBlur stdDeviation='2' />
                                                <feComposite
                                                    in2='hardAlpha'
                                                    operator='out'
                                                />
                                                <feColorMatrix
                                                    type='matrix'
                                                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                                                />
                                                <feBlend
                                                    mode='normal'
                                                    in2='BackgroundImageFix'
                                                    result='effect1_dropShadow_87_677'
                                                />
                                                <feBlend
                                                    mode='normal'
                                                    in='SourceGraphic'
                                                    in2='effect1_dropShadow_87_677'
                                                    result='shape'
                                                />
                                            </filter>
                                        </defs>
                                    </svg>
                                    <h2>{phone}</h2>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col  space-x-0 space-y-4 md:flex-row md:space-x-14 md:space-y-0 text-xs '>
                        <div className='flex justify-start items-start space-x-5 md:flex-col md:space-x-0'>
                            <p className='uppercase text-content '>
                                borrow period
                            </p>
                            <p className='text-black'>01-16 November 2023</p>
                        </div>
                        <div className='flex justify-start items-start space-x-7 md:flex-col md:space-x-0'>
                            <p className='uppercase text-content '>
                                {order_num}
                            </p>
                            <p className='text-black'>115</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
