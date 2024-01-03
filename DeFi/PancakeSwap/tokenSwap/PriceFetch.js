const ethers= require('ethers')
const {
    factoryAddress,
    routerAddress,
    fromAddress,
    toAddress
}=require('./AddressesList');

const {erc20ABI,
    factoryABI,
    pairABI,
    routerABI
}=require('./AbiInfo');

const provider= new ethers.JsonRpcProvider('https://bsc-dataseed1.binance.org/');

const factoryInstance= new ethers.Contract(
    factoryAddress, factoryABI, provider
)

// console.log(factoryInstance);

const routerInstance=new ethers.Contract(
    routerAddress, routerABI, provider
);

console.log(routerInstance);

const priceFetch=async(humanFormat)=>{
    const token1=new ethers.Contract(
        fromAddress, erc20ABI, provider
    )

    const token2=new ethers.Contract(
        toAddress, erc20ABI, provider
    )

    const decimal1=await token1.decimals();
    console.log(decimal1)

    const decimal2=await token2.decimals()
    console.log(decimal2);

    const amountIn=await ethers.parseUnits(humanFormat,decimal1).toString();
    console.log(amountIn);


    const amountOut=await routerInstance.getAmountsOut(
        amountIn,[
            fromAddress,
            toAddress
        ]);

    const humanOutput= await ethers.formatUnits(
        amountOut[1].toString(),
        decimal2
    )
    console.log("This is the Number of WBNB : ",humanOutput)

}
const humanFormat="100";


priceFetch(humanFormat)