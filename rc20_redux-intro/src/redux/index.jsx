

// Note: counter örneginin redux ile cözümünü iki farkli sekilde yapacagiz. Birincisinde store u app.js de olusturacagiz. Ikincisinde ise her biri icin ayri klasör yapisi kuracagiz.

// counter icin tek bir state e ihtiyacimiz var:
const initialState = {
    counter : 0
};

    // reducer bir func dir:

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {counter : state.counter + 1}
        case "DECREMENT":
            return {counter : state.counter - 1}
        case "RESET":
            // return initialState;
            return {counter : 0}
            // reducer muhakkak birsey return eder. Bu nedenle default da bos birakilmaz
        default:
            return state; 
    }
};

export default reducer;

// Not: "INCREMENT"  büyük olma nedeni:
// degismeyecek sabit olan string ler best practice olarak büyük yazilir ama bu zorunluluk degil.
// Not: eger counter in negativ olmasini istemiyorsak;  bu durumda burada yada ui tarafinda bir if statement yazabiliriz. 

