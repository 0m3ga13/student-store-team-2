"use client";

import { useTranslations } from "next-intl";

function AdditionalInfoTab() {
    const t = useTranslations("Index");
    const items = [
        {
            title: t("Additionnal Information"),
            content: {
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget placerat nulla. Vivamus enim nunc, mattis et dignissim vitae, tristique vitae est. Donec quis egestas dolor. Mauris vehicula ut purus at accumsan. Sed quis dolor iaculis, posuere enim at, suscipit tortor. Fusce ultrices ligula ut tortor pellentesque, vel fringilla nisi lobortis. Morbi justo risus, fringilla vitae viverra vitae, luctus nec ipsum. Suspendisse ultrices et urna quis ornare. Praesent facilisis turpis at luctus lacinia. Sed egestas aliquet felis a convallis. Vestibulum euismod imperdiet pharetra. Nulla consectetur, tellus id tincidunt tempus, justo eros volutpat lacus, sit amet tempor nulla arcu vel mi. Donec aliquam vestibulum felis, nec tincidunt dolor accumsan et. Sed dignissim posuere dolor, pulvinar accumsan enim luctus eget. Mauris placerat felis felis, eu semper ex sollicitudin id.<br/> Aliquam pharetra fermentum tempor. Morbi tristique tincidunt felis. Maecenas libero lacus, sollicitudin non cursus vitae, aliquet in eros. Nullam tristique ligula non tellus volutpat, ut vestibulum mi pretium. Donec eu egestas massa. Proin pulvinar, erat et vestibulum efficitur, eros ex tristique libero, ac gravida dolor tortor non nunc. Suspendisse massa erat, viverra id magna in, condimentum viverra purus. Etiam ultrices non nisl a pharetra. Fusce pellentesque libero vel nisl lobortis, a pulvinar mauris facilisis. Proin dictum rhoncus mi sed ullamcorper. Vestibulum maximus erat ac arcu sollicitudin efficitur. Nulla facilisi. Duis nisi nisi, tincidunt non ultricies id, fermentum quis enim. Quisque leo mauris, commodo quis vulputate rhoncus, feugiat a urna. Integer sodales massa ac orci accumsan, vitae molestie ante bibendum.<br/>  Phasellus justo tortor, egestas id finibus in, lobortis at nunc. Curabitur ante enim, porta nec posuere et, vulputate at arcu. Etiam id lectus eget risus pretium convallis. Donec vel nisi dignissim, pretium ipsum ac, venenatis arcu. Sed sit amet arcu tempor, sagittis arcu eu, tristique nulla. Sed sed pellentesque turpis. Vivamus dictum convallis magna, vel aliquet felis sagittis ac.",
                title: "Title Test 1",
            },
        },
        {
            title: t("Location"),
        },
    ];
    return (
        <>
            <div className='w-full flex flex-col justify-center gap-y-6 '>
                <div className='bg-[#EDF1F3] p-1 m-2 rounded flex items-center text-sm font-base text-gray-700 '>
                    <div className='w-full border-2 border-gray-200 rounded-lg p-4'>
                        <h1 className=' text-2xl text-accent mb-4'>
                            {items ? items[0].description : null}
                        </h1>
                        <p className='text-[#3A3A3A] text-base '>
                            {items ? items[0].additional_information : null}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AdditionalInfoTab;
