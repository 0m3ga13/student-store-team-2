import SecurityForm from "@/components/securityForm/SecurityForm";
import UserProfileForm from "@/components/userProfileForm/UserProfileForm";

const page = async ({ searchParams }) => {
    const page = searchParams?.page;

    return (
        <div className='relative'>
            <div className='flex pt-32 leading-6 tracking-wider'>
                <div className=' w-full p-4 mr-12 rounded-md '>
                    {page === "form" && <UserProfileForm />}
                    {page === "security" && <SecurityForm />}
                </div>
            </div>
        </div>
    );
};

export default page;
