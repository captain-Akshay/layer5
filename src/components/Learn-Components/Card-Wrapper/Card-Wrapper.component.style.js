import styled from "styled-components";

const CardComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8rem 4rem;
    .learning-paths{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 2rem;
        margin: 2rem;
    }
    .card-parent{
        border-radius: 2rem;
    }
    .link-a{
        color: black;
    }

    .card-head{
        display: flex;
        padding: 1rem;
        h3{
            margin: 0 1rem;
        }
        span{
            background-color: white;
            border-radius : 1rem;
            padding: 0 0.6rem;
            font-size:0.8rem;
        }

    }

    .card-head-desc{
        padding: 0 1rem;
        p{
            font-size: 1rem;
        }
    
    }
    .card-image{
        text-align: center;
        
        img{
            min-height: 150px;
            max-width: 150px;
            padding: 1rem;
        }
    }
`;
export default CardComponentWrapper;
