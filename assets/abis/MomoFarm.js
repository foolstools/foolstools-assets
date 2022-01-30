export default [{
    type: "function",
    name: "getUserFarmInfos",
    inputs: [{
        type: "uint256[]",
        name: "poolidArr"
    }, {
        type: "address",
        name: "fromAddress"
    }],
    outputs: [{
        components: [{
            type: "uint256[]",
            name: "wantAmounts"
        }, {
            type: "uint256[]",
            name: "workingBalances"
        }, {
            type: "uint256[]",
            name: "gracePeriods"
        }, {
            type: "uint256[]",
            name: "pkeys"
        }, {
            type: "uint256",
            name: "rewardStore"
        }],
        internalType: "struct MoMoHelper.FarmInfo",
        name: "ret",
        type: "tuple"
    }]
}]