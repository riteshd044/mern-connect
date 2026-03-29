import { useQuery } from "@tanstack/react-query"

const useAuthUser = () => {
    	const {data: authUser, isLoading} = useQuery({
		// we use querykey to give a unique name to our query and refer to it later
		queryKey: ["authUser"],
		queryFn: async () => {
			try{
				const res = await fetch("/api/auth/me");
				const data = await res.json();
				if(data.error) return null;
				if(!res.ok) throw new Error(data.error || "Something went wrong");
				return data;
			}catch(error){
				console.log(error);
				throw error;
			}
		},
		retry: false,
	});
    return {authUser, isLoading};
}

export default useAuthUser;

/*
Component calls useQuery({ queryKey: ["authUser"] })
        ↓
Is ["authUser"] already in cache?
        ↓
   YES → return cached data instantly (no API call) ✅
   NO  → make API call, store in cache, return data


The Golden Rule:-
    Same queryKey = Same cache = Same data
*/
