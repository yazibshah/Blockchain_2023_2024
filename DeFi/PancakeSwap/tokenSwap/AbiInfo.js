const erc20ABI=["function decimals() public view returns (uint8)"];

// it will return address liquiduty provider COntract
// 0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16
const factoryABI=["function getPair(address tokenA, address tokenB) external view returns (address pair)"]

const pairABI=[
    "function token0() external view returns (address)",
    "function token1() external view returns (address)",
    "function getReserves() public view returns (uint112 _reserve0, uint112 _reserve1, uint32 _blockTimestampLast)"

]


const routerABI=[
    "function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts)",
]

module.exports={
    erc20ABI,
    factoryABI,
    pairABI,
    routerABI
}