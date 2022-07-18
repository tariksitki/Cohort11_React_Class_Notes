
/// Önemli: Burada dosya ismi icinde Provider da var. Cünkü; bu dosya icinde hem create hem providing hem de consume bulunmaktadir. 

import { createContext, useContext, useEffect, useState } from "react";

    /// 1: Defining Context:
export const UserContext = createContext();

    /// 2: Providing context:
    // simdi yazacagimiz UserContextProvider bir component dir. Bu component in vuradaki vazifesi; icindeki component leri sarmalamaktir.

const UserContextProvider = ({ children }) => {
    // burada cekilen veriyi globale atmak icin burada local state kullaniyoruz.
    const [users, setUsers] = useState();

    useEffect(() => {
      fetch("https://api.github.com/users")
        .then((response) => response.json())
        .then((data) => setUsers(data));
    }, []);

    const changeWidth = (id, width) => {
        setUsers(
            users.map((user) => {
                return (
                    user.id === id ? {...user, width : width} : user
                )
            } )
        )
    };

        // best practice olarak; provider icinde gönderilecek veriler bir degiskene atilir ve bu degisken object formatinda hazirlandigindan; provider icinde iki tane {{}} kullanma zorunlulugu kalmaz
    const values = { users, changeWidth };
  return (
    <UserContext.Provider value={values} >
        {children}
    </UserContext.Provider>
    )
};

export default UserContextProvider;

/// Note: Simdi burada olusturdugumuz context i kolay bir sekilde kullanabilmek icin custom hook yazacagiz. Bunu yazmak zorunda degiliz ama yazdigimizda, bu context i consume etmek icin her defasinda context i import etmemize gerek kalmayacak. sadece bu hook u cagirmamiz yeterlidir. Bu hook u component disinda tanimliyoruz yukarida yada burada.
// Peki bunun custom hook oldugunu nereden anliyoruz. Bir func icinde hook return ediyorsa ve use ile basliyorsa bu bir hook dur. 
// Hook lar top seviyede tanimlanir. Normal js func lari icinde calismaz component icinde tanimlanmak zorundadir. for gibi döngüler icinde kullanilamaz. Hook larin cagirilabilecegi istisnai yerlerden biri de baska bir hook icerisidir. 

    /// 3: Consume Context:
export const useUserContext = () => {
    return useContext(UserContext)
}

// Note: children her bir component in dogal probudur. ve her bir component in cocuklarini ifade eder. yani burada diyoruz ki; bu component cocuklarini sarmalasin diyoruz. 