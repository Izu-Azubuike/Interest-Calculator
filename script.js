
let data = [
    {
        principle:"2500",
        time: 1.8
    },
    {
        principle: "1000", 
        time: 5
    },
    {
        principle: "3000", 
        time: 1
    },

    {
        principle: "2000", 
        time: 3
    }
]

    function interestCalculator(array) {  

        let interestData = [];

        array.forEach(izu => {

            let rate;

            const{
                    principle, time
            } = izu;

            if(principal >= 2500 && time > 1 && time < 3
                ) 
                {rate = 3; }
            
            else if ( principal >= 2500 && time >= 3
            )
                {rate = 4;}

            else if (principal < 2500 || time <= 1
                )
                {rate = 2;}

            else {rate = 1;};    

            let interest = (principal * rate * time) / 100

                izu.interest = interest;
                            
        });

        console.log(interestData);

        return(interestData)

           
    
    };

interestCalculator(data);

















