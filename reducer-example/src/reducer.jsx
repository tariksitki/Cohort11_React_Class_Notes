
// bu dosya klasik bir js dosyasidir. Bu nedenle bas harf kücük. index.js de kücük
// react component ler büyük baslar

// burada amacimiz 3 tane olan local state lerimizi burada tek bir yerde toplamak ve buradan tek elden kontrol etmek. 

// burada olusturdugumuz func ismi reducer olmak zorunda degil.

//// Önemli: initial state state icine nerede aktarilir ???
/// const [state, dispatch] = useReducer(reducer, initialState);   bu kod ile aktarilir.

export const initialState = {
    loading : false,
    error : "",
    dog : ""
};

    // iki parametre alir:
export const reducer = (state, action) => {
    switch (action.type) {
        case "START":
            return {...state, dog : "", error : "", loading : true }
        
        case "SUCCESS":
            return { ...state, dog: action.payload, error: "", loading: false }
            
        case "FAIL":
            return { ...state, dog: "", error: action.payload, loading: false };

        default:
            break
    }
};

// payload yerine baska bir isim verilebilir. 