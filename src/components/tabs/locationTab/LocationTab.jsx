"use client";

function LocationTab({ items }) {
    return (
        <>
            <div className='w-full flex flex-col justify-center gap-y-6 '>
                <div className='bg-[#EDF1F3] p-1 m-2 rounded flex items-center text-sm font-base text-gray-700 '>
                    <div className='w-full border-2 border-gray-200 rounded-lg p-4'>
                        {items[1].location}
                    </div>
                </div>
            </div>
        </>
    );
}
export default LocationTab;
