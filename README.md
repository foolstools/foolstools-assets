# FoolsTools assets
FoolsTools is making the multichain investor's life easier. https://foolstools.net
# Contributing
You're welcome to contribute changes, forking and creating a merge request.

You might especially want to take a look and add submissions to our [Exchanges file](https://github.com/foolstools/foolstools-assets/blob/main/assets/jsons/exchanges.json).
Once we accept the merge, the added exchanges will be available to all users.

## Adding exchanges to the aggregator engine
Currently we support **any exchange using the Uniswap v2 signatures**, out of the box.

### Multi-chain exchanges
We support multichain exchanges. Router and factory contracts must be added for every chain.
#### Example:

        {
            "name": "HyperJump",
            "networks": [
                {
                    "id": 56,
                    "factory": "0xaC653cE27E04C6ac565FD87F18128aD33ca03Ba2",
                    "router": "0x3bc677674df90A9e5D741f28f6CA303357D0E4Ec"
                },
                {
                    "id": 137,
                    "factory": "0x991152411A7B5A14A8CF0cDDE8439435328070dF",
                    "router": "0x53c153a0df7e050bbefbb70ee9632061f12795fb"
                }
            ],
            "url": "https://swap.hyperjump.fi/",
            "icon": "https://gblobscdn.gitbook.com/spaces%2F-MTYFliHdk6QUbMgxsyY%2Favatar-1613352108207.png?alt=media",
            "description": "Are you ready to move beyond the corridor of our space-time, on an adventure to unveil the treasures and secrets of the universe?"
        },


### Custom ABIs
It's possible to add support for exchanges using **customized methods**, adding the corresponding ABIs to the ABI folder. The functions must also be mapped in the exchanges file.

#### Example:

        {
            "name": "KoffeSwap",
            "networks": [
                {
                    "id": 321,
                    "factory": "0xC0fFeE00000e1439651C6aD025ea2A71ED7F3Eab",
                    "router": "0xc0fFee0000C824D24E0F280f1e4D21152625742b",
                    "custom_abi": "koffeeswap_router_abi",
                    "functions": {
                        "swapExactETHForTokens" : "swapExactKCSForTokens",
                        "swapExactETHForTokensSupportingFeeOnTransferTokens": "swapExactKCSForTokensSupportingFeeOnTransferTokens",
                        "swapExactTokensForETH": "swapExactTokensForKCS",
                        "swapExactTokensForTokens": "swapExactTokensForTokens",
                        "swapExactTokensForTokensSupportingFeeOnTransferTokens": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
                        "swapETHForExactTokens": "swapKCSForExactTokens",
                        "swapTokensForExactETH": "swapTokensForExactKCS",
                        "swapTokensForExactTokens": "swapTokensForExactTokens"
                    }                    
                }
            ],
            "url": "http://koffeeswap.exchange/#/swap",
            "icon": "http://koffeeswap.exchange/static/media/logo.e41273ab.png",
            "description": "KoffeSwap"
        },      
        
## Questions
Please join the FoolsTools [telegram group](https://t.me/theTestToken) if you have any question or request.
