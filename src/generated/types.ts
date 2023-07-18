export default {
    "scalars": [
        9,
        20,
        32,
        44,
        45,
        55,
        59,
        62,
        63,
        73,
        85,
        97,
        105,
        106,
        108,
        109,
        114,
        116,
        117
    ],
    "types": {
        "AuctionMetadata": {
            "auctionId": [
                117
            ],
            "auction_metadata_dutch_auction": [
                64
            ],
            "endTime": [
                114
            ],
            "id": [
                117
            ],
            "index": [
                106
            ],
            "nostrEventId": [
                109
            ],
            "price": [
                114
            ],
            "scheduledTime": [
                114
            ],
            "signedPsbt": [
                109
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataAggregate": {
            "aggregate": [
                3
            ],
            "nodes": [
                0
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataAggregateBoolExp": {
            "count": [
                113
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataAggregateFields": {
            "avg": [
                6
            ],
            "count": [
                106,
                {
                    "columns": [
                        20,
                        "[AuctionMetadataSelectColumn!]"
                    ],
                    "distinct": [
                        62
                    ]
                }
            ],
            "max": [
                12
            ],
            "min": [
                14
            ],
            "stddev": [
                22
            ],
            "stddevPop": [
                24
            ],
            "stddevSamp": [
                26
            ],
            "sum": [
                30
            ],
            "varPop": [
                34
            ],
            "varSamp": [
                36
            ],
            "variance": [
                38
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataAggregateOrderBy": {
            "avg": [
                7
            ],
            "count": [
                108
            ],
            "max": [
                13
            ],
            "min": [
                15
            ],
            "stddev": [
                23
            ],
            "stddevPop": [
                25
            ],
            "stddevSamp": [
                27
            ],
            "sum": [
                31
            ],
            "varPop": [
                35
            ],
            "varSamp": [
                37
            ],
            "variance": [
                39
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataArrRelInsertInput": {
            "data": [
                11
            ],
            "onConflict": [
                17
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataAvgFields": {
            "endTime": [
                105
            ],
            "index": [
                105
            ],
            "price": [
                105
            ],
            "scheduledTime": [
                105
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataAvgOrderBy": {
            "endTime": [
                108
            ],
            "index": [
                108
            ],
            "price": [
                108
            ],
            "scheduledTime": [
                108
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataBoolExp": {
            "_and": [
                8
            ],
            "_not": [
                8
            ],
            "_or": [
                8
            ],
            "auctionId": [
                112
            ],
            "auction_metadata_dutch_auction": [
                72
            ],
            "endTime": [
                61
            ],
            "id": [
                112
            ],
            "index": [
                107
            ],
            "nostrEventId": [
                110
            ],
            "price": [
                61
            ],
            "scheduledTime": [
                61
            ],
            "signedPsbt": [
                110
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataConstraint": {},
        "AuctionMetadataIncInput": {
            "endTime": [
                114
            ],
            "index": [
                106
            ],
            "price": [
                114
            ],
            "scheduledTime": [
                114
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataInsertInput": {
            "auctionId": [
                117
            ],
            "auction_metadata_dutch_auction": [
                81
            ],
            "endTime": [
                114
            ],
            "id": [
                117
            ],
            "index": [
                106
            ],
            "nostrEventId": [
                109
            ],
            "price": [
                114
            ],
            "scheduledTime": [
                114
            ],
            "signedPsbt": [
                109
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataMaxFields": {
            "auctionId": [
                117
            ],
            "endTime": [
                114
            ],
            "id": [
                117
            ],
            "index": [
                106
            ],
            "nostrEventId": [
                109
            ],
            "price": [
                114
            ],
            "scheduledTime": [
                114
            ],
            "signedPsbt": [
                109
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataMaxOrderBy": {
            "auctionId": [
                108
            ],
            "endTime": [
                108
            ],
            "id": [
                108
            ],
            "index": [
                108
            ],
            "nostrEventId": [
                108
            ],
            "price": [
                108
            ],
            "scheduledTime": [
                108
            ],
            "signedPsbt": [
                108
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataMinFields": {
            "auctionId": [
                117
            ],
            "endTime": [
                114
            ],
            "id": [
                117
            ],
            "index": [
                106
            ],
            "nostrEventId": [
                109
            ],
            "price": [
                114
            ],
            "scheduledTime": [
                114
            ],
            "signedPsbt": [
                109
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataMinOrderBy": {
            "auctionId": [
                108
            ],
            "endTime": [
                108
            ],
            "id": [
                108
            ],
            "index": [
                108
            ],
            "nostrEventId": [
                108
            ],
            "price": [
                108
            ],
            "scheduledTime": [
                108
            ],
            "signedPsbt": [
                108
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataMutationResponse": {
            "affectedRows": [
                106
            ],
            "returning": [
                0
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataOnConflict": {
            "constraint": [
                9
            ],
            "updateColumns": [
                32
            ],
            "where": [
                8
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataOrderBy": {
            "auctionId": [
                108
            ],
            "auction_metadata_dutch_auction": [
                83
            ],
            "endTime": [
                108
            ],
            "id": [
                108
            ],
            "index": [
                108
            ],
            "nostrEventId": [
                108
            ],
            "price": [
                108
            ],
            "scheduledTime": [
                108
            ],
            "signedPsbt": [
                108
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataPkColumnsInput": {
            "id": [
                117
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataSelectColumn": {},
        "AuctionMetadataSetInput": {
            "auctionId": [
                117
            ],
            "endTime": [
                114
            ],
            "id": [
                117
            ],
            "index": [
                106
            ],
            "nostrEventId": [
                109
            ],
            "price": [
                114
            ],
            "scheduledTime": [
                114
            ],
            "signedPsbt": [
                109
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataStddevFields": {
            "endTime": [
                105
            ],
            "index": [
                105
            ],
            "price": [
                105
            ],
            "scheduledTime": [
                105
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataStddevOrderBy": {
            "endTime": [
                108
            ],
            "index": [
                108
            ],
            "price": [
                108
            ],
            "scheduledTime": [
                108
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataStddevPopFields": {
            "endTime": [
                105
            ],
            "index": [
                105
            ],
            "price": [
                105
            ],
            "scheduledTime": [
                105
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataStddevPopOrderBy": {
            "endTime": [
                108
            ],
            "index": [
                108
            ],
            "price": [
                108
            ],
            "scheduledTime": [
                108
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataStddevSampFields": {
            "endTime": [
                105
            ],
            "index": [
                105
            ],
            "price": [
                105
            ],
            "scheduledTime": [
                105
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataStddevSampOrderBy": {
            "endTime": [
                108
            ],
            "index": [
                108
            ],
            "price": [
                108
            ],
            "scheduledTime": [
                108
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataStreamCursorInput": {
            "initialValue": [
                29
            ],
            "ordering": [
                63
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataStreamCursorValueInput": {
            "auctionId": [
                117
            ],
            "endTime": [
                114
            ],
            "id": [
                117
            ],
            "index": [
                106
            ],
            "nostrEventId": [
                109
            ],
            "price": [
                114
            ],
            "scheduledTime": [
                114
            ],
            "signedPsbt": [
                109
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataSumFields": {
            "endTime": [
                114
            ],
            "index": [
                106
            ],
            "price": [
                114
            ],
            "scheduledTime": [
                114
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataSumOrderBy": {
            "endTime": [
                108
            ],
            "index": [
                108
            ],
            "price": [
                108
            ],
            "scheduledTime": [
                108
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataUpdateColumn": {},
        "AuctionMetadataUpdates": {
            "_inc": [
                10
            ],
            "_set": [
                21
            ],
            "where": [
                8
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataVarPopFields": {
            "endTime": [
                105
            ],
            "index": [
                105
            ],
            "price": [
                105
            ],
            "scheduledTime": [
                105
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataVarPopOrderBy": {
            "endTime": [
                108
            ],
            "index": [
                108
            ],
            "price": [
                108
            ],
            "scheduledTime": [
                108
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataVarSampFields": {
            "endTime": [
                105
            ],
            "index": [
                105
            ],
            "price": [
                105
            ],
            "scheduledTime": [
                105
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataVarSampOrderBy": {
            "endTime": [
                108
            ],
            "index": [
                108
            ],
            "price": [
                108
            ],
            "scheduledTime": [
                108
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataVarianceFields": {
            "endTime": [
                105
            ],
            "index": [
                105
            ],
            "price": [
                105
            ],
            "scheduledTime": [
                105
            ],
            "__typename": [
                109
            ]
        },
        "AuctionMetadataVarianceOrderBy": {
            "endTime": [
                108
            ],
            "index": [
                108
            ],
            "price": [
                108
            ],
            "scheduledTime": [
                108
            ],
            "__typename": [
                109
            ]
        },
        "AuctionStatus": {
            "dutchAuctions": [
                64,
                {
                    "distinctOn": [
                        85,
                        "[DutchAuctionSelectColumn!]"
                    ],
                    "limit": [
                        106
                    ],
                    "offset": [
                        106
                    ],
                    "orderBy": [
                        83,
                        "[DutchAuctionOrderBy!]"
                    ],
                    "where": [
                        72
                    ]
                }
            ],
            "dutchAuctionsAggregate": [
                65,
                {
                    "distinctOn": [
                        85,
                        "[DutchAuctionSelectColumn!]"
                    ],
                    "limit": [
                        106
                    ],
                    "offset": [
                        106
                    ],
                    "orderBy": [
                        83,
                        "[DutchAuctionOrderBy!]"
                    ],
                    "where": [
                        72
                    ]
                }
            ],
            "value": [
                109
            ],
            "__typename": [
                109
            ]
        },
        "AuctionStatusAggregate": {
            "aggregate": [
                42
            ],
            "nodes": [
                40
            ],
            "__typename": [
                109
            ]
        },
        "AuctionStatusAggregateFields": {
            "count": [
                106,
                {
                    "columns": [
                        55,
                        "[AuctionStatusSelectColumn!]"
                    ],
                    "distinct": [
                        62
                    ]
                }
            ],
            "max": [
                48
            ],
            "min": [
                49
            ],
            "__typename": [
                109
            ]
        },
        "AuctionStatusBoolExp": {
            "_and": [
                43
            ],
            "_not": [
                43
            ],
            "_or": [
                43
            ],
            "dutchAuctions": [
                72
            ],
            "dutchAuctionsAggregate": [
                66
            ],
            "value": [
                110
            ],
            "__typename": [
                109
            ]
        },
        "AuctionStatusConstraint": {},
        "AuctionStatusEnum": {},
        "AuctionStatusEnumComparisonExp": {
            "_eq": [
                45
            ],
            "_in": [
                45
            ],
            "_isNull": [
                62
            ],
            "_neq": [
                45
            ],
            "_nin": [
                45
            ],
            "__typename": [
                109
            ]
        },
        "AuctionStatusInsertInput": {
            "dutchAuctions": [
                69
            ],
            "value": [
                109
            ],
            "__typename": [
                109
            ]
        },
        "AuctionStatusMaxFields": {
            "value": [
                109
            ],
            "__typename": [
                109
            ]
        },
        "AuctionStatusMinFields": {
            "value": [
                109
            ],
            "__typename": [
                109
            ]
        },
        "AuctionStatusMutationResponse": {
            "affectedRows": [
                106
            ],
            "returning": [
                40
            ],
            "__typename": [
                109
            ]
        },
        "AuctionStatusObjRelInsertInput": {
            "data": [
                47
            ],
            "onConflict": [
                52
            ],
            "__typename": [
                109
            ]
        },
        "AuctionStatusOnConflict": {
            "constraint": [
                44
            ],
            "updateColumns": [
                59
            ],
            "where": [
                43
            ],
            "__typename": [
                109
            ]
        },
        "AuctionStatusOrderBy": {
            "dutchAuctionsAggregate": [
                68
            ],
            "value": [
                108
            ],
            "__typename": [
                109
            ]
        },
        "AuctionStatusPkColumnsInput": {
            "value": [
                109
            ],
            "__typename": [
                109
            ]
        },
        "AuctionStatusSelectColumn": {},
        "AuctionStatusSetInput": {
            "value": [
                109
            ],
            "__typename": [
                109
            ]
        },
        "AuctionStatusStreamCursorInput": {
            "initialValue": [
                58
            ],
            "ordering": [
                63
            ],
            "__typename": [
                109
            ]
        },
        "AuctionStatusStreamCursorValueInput": {
            "value": [
                109
            ],
            "__typename": [
                109
            ]
        },
        "AuctionStatusUpdateColumn": {},
        "AuctionStatusUpdates": {
            "_set": [
                56
            ],
            "where": [
                43
            ],
            "__typename": [
                109
            ]
        },
        "BigintComparisonExp": {
            "_eq": [
                114
            ],
            "_gt": [
                114
            ],
            "_gte": [
                114
            ],
            "_in": [
                114
            ],
            "_isNull": [
                62
            ],
            "_lt": [
                114
            ],
            "_lte": [
                114
            ],
            "_neq": [
                114
            ],
            "_nin": [
                114
            ],
            "__typename": [
                109
            ]
        },
        "Boolean": {},
        "CursorOrdering": {},
        "DutchAuction": {
            "auctionId": [
                117
            ],
            "collection": [
                109
            ],
            "createdAt": [
                116
            ],
            "currentPrice": [
                106
            ],
            "decreaseAmount": [
                106
            ],
            "dutchAuctionAuctionMetadataAggregate": [
                1,
                {
                    "distinctOn": [
                        20,
                        "[AuctionMetadataSelectColumn!]"
                    ],
                    "limit": [
                        106
                    ],
                    "offset": [
                        106
                    ],
                    "orderBy": [
                        18,
                        "[AuctionMetadataOrderBy!]"
                    ],
                    "where": [
                        8
                    ]
                }
            ],
            "dutch_auction_auction_metadata": [
                0,
                {
                    "distinctOn": [
                        20,
                        "[AuctionMetadataSelectColumn!]"
                    ],
                    "limit": [
                        106
                    ],
                    "offset": [
                        106
                    ],
                    "orderBy": [
                        18,
                        "[AuctionMetadataOrderBy!]"
                    ],
                    "where": [
                        8
                    ]
                }
            ],
            "dutch_auction_auction_status": [
                40
            ],
            "id": [
                117
            ],
            "initialPrice": [
                106
            ],
            "inscriptionId": [
                109
            ],
            "ownerOrdinalsAddress": [
                109
            ],
            "reservePrice": [
                106
            ],
            "scheduledISODate": [
                116
            ],
            "secondsBetweenEachDecrease": [
                106
            ],
            "startTime": [
                114
            ],
            "status": [
                45
            ],
            "txid": [
                109
            ],
            "updatedAt": [
                116
            ],
            "utxoCreatedAt": [
                106
            ],
            "utxoNum": [
                109
            ],
            "vout": [
                106
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionAggregate": {
            "aggregate": [
                67
            ],
            "nodes": [
                64
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionAggregateBoolExp": {
            "count": [
                115
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionAggregateFields": {
            "avg": [
                70
            ],
            "count": [
                106,
                {
                    "columns": [
                        85,
                        "[DutchAuctionSelectColumn!]"
                    ],
                    "distinct": [
                        62
                    ]
                }
            ],
            "max": [
                76
            ],
            "min": [
                78
            ],
            "stddev": [
                87
            ],
            "stddevPop": [
                89
            ],
            "stddevSamp": [
                91
            ],
            "sum": [
                95
            ],
            "varPop": [
                99
            ],
            "varSamp": [
                101
            ],
            "variance": [
                103
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionAggregateOrderBy": {
            "avg": [
                71
            ],
            "count": [
                108
            ],
            "max": [
                77
            ],
            "min": [
                79
            ],
            "stddev": [
                88
            ],
            "stddevPop": [
                90
            ],
            "stddevSamp": [
                92
            ],
            "sum": [
                96
            ],
            "varPop": [
                100
            ],
            "varSamp": [
                102
            ],
            "variance": [
                104
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionArrRelInsertInput": {
            "data": [
                75
            ],
            "onConflict": [
                82
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionAvgFields": {
            "currentPrice": [
                105
            ],
            "decreaseAmount": [
                105
            ],
            "initialPrice": [
                105
            ],
            "reservePrice": [
                105
            ],
            "secondsBetweenEachDecrease": [
                105
            ],
            "startTime": [
                105
            ],
            "utxoCreatedAt": [
                105
            ],
            "vout": [
                105
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionAvgOrderBy": {
            "currentPrice": [
                108
            ],
            "decreaseAmount": [
                108
            ],
            "initialPrice": [
                108
            ],
            "reservePrice": [
                108
            ],
            "secondsBetweenEachDecrease": [
                108
            ],
            "startTime": [
                108
            ],
            "utxoCreatedAt": [
                108
            ],
            "vout": [
                108
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionBoolExp": {
            "_and": [
                72
            ],
            "_not": [
                72
            ],
            "_or": [
                72
            ],
            "auctionId": [
                112
            ],
            "collection": [
                110
            ],
            "createdAt": [
                111
            ],
            "currentPrice": [
                107
            ],
            "decreaseAmount": [
                107
            ],
            "dutch_auction_auction_metadata": [
                8
            ],
            "dutch_auction_auction_metadataAggregate": [
                2
            ],
            "dutch_auction_auction_status": [
                43
            ],
            "id": [
                112
            ],
            "initialPrice": [
                107
            ],
            "inscriptionId": [
                110
            ],
            "ownerOrdinalsAddress": [
                110
            ],
            "reservePrice": [
                107
            ],
            "scheduledISODate": [
                111
            ],
            "secondsBetweenEachDecrease": [
                107
            ],
            "startTime": [
                61
            ],
            "status": [
                46
            ],
            "txid": [
                110
            ],
            "updatedAt": [
                111
            ],
            "utxoCreatedAt": [
                107
            ],
            "utxoNum": [
                110
            ],
            "vout": [
                107
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionConstraint": {},
        "DutchAuctionIncInput": {
            "currentPrice": [
                106
            ],
            "decreaseAmount": [
                106
            ],
            "initialPrice": [
                106
            ],
            "reservePrice": [
                106
            ],
            "secondsBetweenEachDecrease": [
                106
            ],
            "startTime": [
                114
            ],
            "utxoCreatedAt": [
                106
            ],
            "vout": [
                106
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionInsertInput": {
            "auctionId": [
                117
            ],
            "collection": [
                109
            ],
            "createdAt": [
                116
            ],
            "currentPrice": [
                106
            ],
            "decreaseAmount": [
                106
            ],
            "dutch_auction_auction_metadata": [
                5
            ],
            "dutch_auction_auction_status": [
                51
            ],
            "id": [
                117
            ],
            "initialPrice": [
                106
            ],
            "inscriptionId": [
                109
            ],
            "ownerOrdinalsAddress": [
                109
            ],
            "reservePrice": [
                106
            ],
            "scheduledISODate": [
                116
            ],
            "secondsBetweenEachDecrease": [
                106
            ],
            "startTime": [
                114
            ],
            "status": [
                45
            ],
            "txid": [
                109
            ],
            "updatedAt": [
                116
            ],
            "utxoCreatedAt": [
                106
            ],
            "utxoNum": [
                109
            ],
            "vout": [
                106
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionMaxFields": {
            "auctionId": [
                117
            ],
            "collection": [
                109
            ],
            "createdAt": [
                116
            ],
            "currentPrice": [
                106
            ],
            "decreaseAmount": [
                106
            ],
            "id": [
                117
            ],
            "initialPrice": [
                106
            ],
            "inscriptionId": [
                109
            ],
            "ownerOrdinalsAddress": [
                109
            ],
            "reservePrice": [
                106
            ],
            "scheduledISODate": [
                116
            ],
            "secondsBetweenEachDecrease": [
                106
            ],
            "startTime": [
                114
            ],
            "txid": [
                109
            ],
            "updatedAt": [
                116
            ],
            "utxoCreatedAt": [
                106
            ],
            "utxoNum": [
                109
            ],
            "vout": [
                106
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionMaxOrderBy": {
            "auctionId": [
                108
            ],
            "collection": [
                108
            ],
            "createdAt": [
                108
            ],
            "currentPrice": [
                108
            ],
            "decreaseAmount": [
                108
            ],
            "id": [
                108
            ],
            "initialPrice": [
                108
            ],
            "inscriptionId": [
                108
            ],
            "ownerOrdinalsAddress": [
                108
            ],
            "reservePrice": [
                108
            ],
            "scheduledISODate": [
                108
            ],
            "secondsBetweenEachDecrease": [
                108
            ],
            "startTime": [
                108
            ],
            "txid": [
                108
            ],
            "updatedAt": [
                108
            ],
            "utxoCreatedAt": [
                108
            ],
            "utxoNum": [
                108
            ],
            "vout": [
                108
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionMinFields": {
            "auctionId": [
                117
            ],
            "collection": [
                109
            ],
            "createdAt": [
                116
            ],
            "currentPrice": [
                106
            ],
            "decreaseAmount": [
                106
            ],
            "id": [
                117
            ],
            "initialPrice": [
                106
            ],
            "inscriptionId": [
                109
            ],
            "ownerOrdinalsAddress": [
                109
            ],
            "reservePrice": [
                106
            ],
            "scheduledISODate": [
                116
            ],
            "secondsBetweenEachDecrease": [
                106
            ],
            "startTime": [
                114
            ],
            "txid": [
                109
            ],
            "updatedAt": [
                116
            ],
            "utxoCreatedAt": [
                106
            ],
            "utxoNum": [
                109
            ],
            "vout": [
                106
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionMinOrderBy": {
            "auctionId": [
                108
            ],
            "collection": [
                108
            ],
            "createdAt": [
                108
            ],
            "currentPrice": [
                108
            ],
            "decreaseAmount": [
                108
            ],
            "id": [
                108
            ],
            "initialPrice": [
                108
            ],
            "inscriptionId": [
                108
            ],
            "ownerOrdinalsAddress": [
                108
            ],
            "reservePrice": [
                108
            ],
            "scheduledISODate": [
                108
            ],
            "secondsBetweenEachDecrease": [
                108
            ],
            "startTime": [
                108
            ],
            "txid": [
                108
            ],
            "updatedAt": [
                108
            ],
            "utxoCreatedAt": [
                108
            ],
            "utxoNum": [
                108
            ],
            "vout": [
                108
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionMutationResponse": {
            "affectedRows": [
                106
            ],
            "returning": [
                64
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionObjRelInsertInput": {
            "data": [
                75
            ],
            "onConflict": [
                82
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionOnConflict": {
            "constraint": [
                73
            ],
            "updateColumns": [
                97
            ],
            "where": [
                72
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionOrderBy": {
            "auctionId": [
                108
            ],
            "collection": [
                108
            ],
            "createdAt": [
                108
            ],
            "currentPrice": [
                108
            ],
            "decreaseAmount": [
                108
            ],
            "dutch_auction_auction_metadataAggregate": [
                4
            ],
            "dutch_auction_auction_status": [
                53
            ],
            "id": [
                108
            ],
            "initialPrice": [
                108
            ],
            "inscriptionId": [
                108
            ],
            "ownerOrdinalsAddress": [
                108
            ],
            "reservePrice": [
                108
            ],
            "scheduledISODate": [
                108
            ],
            "secondsBetweenEachDecrease": [
                108
            ],
            "startTime": [
                108
            ],
            "status": [
                108
            ],
            "txid": [
                108
            ],
            "updatedAt": [
                108
            ],
            "utxoCreatedAt": [
                108
            ],
            "utxoNum": [
                108
            ],
            "vout": [
                108
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionPkColumnsInput": {
            "auctionId": [
                117
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionSelectColumn": {},
        "DutchAuctionSetInput": {
            "auctionId": [
                117
            ],
            "collection": [
                109
            ],
            "createdAt": [
                116
            ],
            "currentPrice": [
                106
            ],
            "decreaseAmount": [
                106
            ],
            "id": [
                117
            ],
            "initialPrice": [
                106
            ],
            "inscriptionId": [
                109
            ],
            "ownerOrdinalsAddress": [
                109
            ],
            "reservePrice": [
                106
            ],
            "scheduledISODate": [
                116
            ],
            "secondsBetweenEachDecrease": [
                106
            ],
            "startTime": [
                114
            ],
            "status": [
                45
            ],
            "txid": [
                109
            ],
            "updatedAt": [
                116
            ],
            "utxoCreatedAt": [
                106
            ],
            "utxoNum": [
                109
            ],
            "vout": [
                106
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionStddevFields": {
            "currentPrice": [
                105
            ],
            "decreaseAmount": [
                105
            ],
            "initialPrice": [
                105
            ],
            "reservePrice": [
                105
            ],
            "secondsBetweenEachDecrease": [
                105
            ],
            "startTime": [
                105
            ],
            "utxoCreatedAt": [
                105
            ],
            "vout": [
                105
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionStddevOrderBy": {
            "currentPrice": [
                108
            ],
            "decreaseAmount": [
                108
            ],
            "initialPrice": [
                108
            ],
            "reservePrice": [
                108
            ],
            "secondsBetweenEachDecrease": [
                108
            ],
            "startTime": [
                108
            ],
            "utxoCreatedAt": [
                108
            ],
            "vout": [
                108
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionStddevPopFields": {
            "currentPrice": [
                105
            ],
            "decreaseAmount": [
                105
            ],
            "initialPrice": [
                105
            ],
            "reservePrice": [
                105
            ],
            "secondsBetweenEachDecrease": [
                105
            ],
            "startTime": [
                105
            ],
            "utxoCreatedAt": [
                105
            ],
            "vout": [
                105
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionStddevPopOrderBy": {
            "currentPrice": [
                108
            ],
            "decreaseAmount": [
                108
            ],
            "initialPrice": [
                108
            ],
            "reservePrice": [
                108
            ],
            "secondsBetweenEachDecrease": [
                108
            ],
            "startTime": [
                108
            ],
            "utxoCreatedAt": [
                108
            ],
            "vout": [
                108
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionStddevSampFields": {
            "currentPrice": [
                105
            ],
            "decreaseAmount": [
                105
            ],
            "initialPrice": [
                105
            ],
            "reservePrice": [
                105
            ],
            "secondsBetweenEachDecrease": [
                105
            ],
            "startTime": [
                105
            ],
            "utxoCreatedAt": [
                105
            ],
            "vout": [
                105
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionStddevSampOrderBy": {
            "currentPrice": [
                108
            ],
            "decreaseAmount": [
                108
            ],
            "initialPrice": [
                108
            ],
            "reservePrice": [
                108
            ],
            "secondsBetweenEachDecrease": [
                108
            ],
            "startTime": [
                108
            ],
            "utxoCreatedAt": [
                108
            ],
            "vout": [
                108
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionStreamCursorInput": {
            "initialValue": [
                94
            ],
            "ordering": [
                63
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionStreamCursorValueInput": {
            "auctionId": [
                117
            ],
            "collection": [
                109
            ],
            "createdAt": [
                116
            ],
            "currentPrice": [
                106
            ],
            "decreaseAmount": [
                106
            ],
            "id": [
                117
            ],
            "initialPrice": [
                106
            ],
            "inscriptionId": [
                109
            ],
            "ownerOrdinalsAddress": [
                109
            ],
            "reservePrice": [
                106
            ],
            "scheduledISODate": [
                116
            ],
            "secondsBetweenEachDecrease": [
                106
            ],
            "startTime": [
                114
            ],
            "status": [
                45
            ],
            "txid": [
                109
            ],
            "updatedAt": [
                116
            ],
            "utxoCreatedAt": [
                106
            ],
            "utxoNum": [
                109
            ],
            "vout": [
                106
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionSumFields": {
            "currentPrice": [
                106
            ],
            "decreaseAmount": [
                106
            ],
            "initialPrice": [
                106
            ],
            "reservePrice": [
                106
            ],
            "secondsBetweenEachDecrease": [
                106
            ],
            "startTime": [
                114
            ],
            "utxoCreatedAt": [
                106
            ],
            "vout": [
                106
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionSumOrderBy": {
            "currentPrice": [
                108
            ],
            "decreaseAmount": [
                108
            ],
            "initialPrice": [
                108
            ],
            "reservePrice": [
                108
            ],
            "secondsBetweenEachDecrease": [
                108
            ],
            "startTime": [
                108
            ],
            "utxoCreatedAt": [
                108
            ],
            "vout": [
                108
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionUpdateColumn": {},
        "DutchAuctionUpdates": {
            "_inc": [
                74
            ],
            "_set": [
                86
            ],
            "where": [
                72
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionVarPopFields": {
            "currentPrice": [
                105
            ],
            "decreaseAmount": [
                105
            ],
            "initialPrice": [
                105
            ],
            "reservePrice": [
                105
            ],
            "secondsBetweenEachDecrease": [
                105
            ],
            "startTime": [
                105
            ],
            "utxoCreatedAt": [
                105
            ],
            "vout": [
                105
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionVarPopOrderBy": {
            "currentPrice": [
                108
            ],
            "decreaseAmount": [
                108
            ],
            "initialPrice": [
                108
            ],
            "reservePrice": [
                108
            ],
            "secondsBetweenEachDecrease": [
                108
            ],
            "startTime": [
                108
            ],
            "utxoCreatedAt": [
                108
            ],
            "vout": [
                108
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionVarSampFields": {
            "currentPrice": [
                105
            ],
            "decreaseAmount": [
                105
            ],
            "initialPrice": [
                105
            ],
            "reservePrice": [
                105
            ],
            "secondsBetweenEachDecrease": [
                105
            ],
            "startTime": [
                105
            ],
            "utxoCreatedAt": [
                105
            ],
            "vout": [
                105
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionVarSampOrderBy": {
            "currentPrice": [
                108
            ],
            "decreaseAmount": [
                108
            ],
            "initialPrice": [
                108
            ],
            "reservePrice": [
                108
            ],
            "secondsBetweenEachDecrease": [
                108
            ],
            "startTime": [
                108
            ],
            "utxoCreatedAt": [
                108
            ],
            "vout": [
                108
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionVarianceFields": {
            "currentPrice": [
                105
            ],
            "decreaseAmount": [
                105
            ],
            "initialPrice": [
                105
            ],
            "reservePrice": [
                105
            ],
            "secondsBetweenEachDecrease": [
                105
            ],
            "startTime": [
                105
            ],
            "utxoCreatedAt": [
                105
            ],
            "vout": [
                105
            ],
            "__typename": [
                109
            ]
        },
        "DutchAuctionVarianceOrderBy": {
            "currentPrice": [
                108
            ],
            "decreaseAmount": [
                108
            ],
            "initialPrice": [
                108
            ],
            "reservePrice": [
                108
            ],
            "secondsBetweenEachDecrease": [
                108
            ],
            "startTime": [
                108
            ],
            "utxoCreatedAt": [
                108
            ],
            "vout": [
                108
            ],
            "__typename": [
                109
            ]
        },
        "Float": {},
        "Int": {},
        "IntComparisonExp": {
            "_eq": [
                106
            ],
            "_gt": [
                106
            ],
            "_gte": [
                106
            ],
            "_in": [
                106
            ],
            "_isNull": [
                62
            ],
            "_lt": [
                106
            ],
            "_lte": [
                106
            ],
            "_neq": [
                106
            ],
            "_nin": [
                106
            ],
            "__typename": [
                109
            ]
        },
        "OrderBy": {},
        "String": {},
        "StringComparisonExp": {
            "_eq": [
                109
            ],
            "_gt": [
                109
            ],
            "_gte": [
                109
            ],
            "_ilike": [
                109
            ],
            "_in": [
                109
            ],
            "_iregex": [
                109
            ],
            "_isNull": [
                62
            ],
            "_like": [
                109
            ],
            "_lt": [
                109
            ],
            "_lte": [
                109
            ],
            "_neq": [
                109
            ],
            "_nilike": [
                109
            ],
            "_nin": [
                109
            ],
            "_niregex": [
                109
            ],
            "_nlike": [
                109
            ],
            "_nregex": [
                109
            ],
            "_nsimilar": [
                109
            ],
            "_regex": [
                109
            ],
            "_similar": [
                109
            ],
            "__typename": [
                109
            ]
        },
        "TimestamptzComparisonExp": {
            "_eq": [
                116
            ],
            "_gt": [
                116
            ],
            "_gte": [
                116
            ],
            "_in": [
                116
            ],
            "_isNull": [
                62
            ],
            "_lt": [
                116
            ],
            "_lte": [
                116
            ],
            "_neq": [
                116
            ],
            "_nin": [
                116
            ],
            "__typename": [
                109
            ]
        },
        "UuidComparisonExp": {
            "_eq": [
                117
            ],
            "_gt": [
                117
            ],
            "_gte": [
                117
            ],
            "_in": [
                117
            ],
            "_isNull": [
                62
            ],
            "_lt": [
                117
            ],
            "_lte": [
                117
            ],
            "_neq": [
                117
            ],
            "_nin": [
                117
            ],
            "__typename": [
                109
            ]
        },
        "auctionMetadataAggregateBoolExpCount": {
            "arguments": [
                20
            ],
            "distinct": [
                62
            ],
            "filter": [
                8
            ],
            "predicate": [
                107
            ],
            "__typename": [
                109
            ]
        },
        "bigint": {},
        "dutchAuctionAggregateBoolExpCount": {
            "arguments": [
                85
            ],
            "distinct": [
                62
            ],
            "filter": [
                72
            ],
            "predicate": [
                107
            ],
            "__typename": [
                109
            ]
        },
        "timestamptz": {},
        "uuid": {},
        "Query": {
            "auctionMetadata": [
                0,
                {
                    "distinctOn": [
                        20,
                        "[AuctionMetadataSelectColumn!]"
                    ],
                    "limit": [
                        106
                    ],
                    "offset": [
                        106
                    ],
                    "orderBy": [
                        18,
                        "[AuctionMetadataOrderBy!]"
                    ],
                    "where": [
                        8
                    ]
                }
            ],
            "auctionMetadataAggregate": [
                1,
                {
                    "distinctOn": [
                        20,
                        "[AuctionMetadataSelectColumn!]"
                    ],
                    "limit": [
                        106
                    ],
                    "offset": [
                        106
                    ],
                    "orderBy": [
                        18,
                        "[AuctionMetadataOrderBy!]"
                    ],
                    "where": [
                        8
                    ]
                }
            ],
            "auctionMetadataByPk": [
                0,
                {
                    "id": [
                        117,
                        "uuid!"
                    ]
                }
            ],
            "auctionStatus": [
                40,
                {
                    "distinctOn": [
                        55,
                        "[AuctionStatusSelectColumn!]"
                    ],
                    "limit": [
                        106
                    ],
                    "offset": [
                        106
                    ],
                    "orderBy": [
                        53,
                        "[AuctionStatusOrderBy!]"
                    ],
                    "where": [
                        43
                    ]
                }
            ],
            "auctionStatusAggregate": [
                41,
                {
                    "distinctOn": [
                        55,
                        "[AuctionStatusSelectColumn!]"
                    ],
                    "limit": [
                        106
                    ],
                    "offset": [
                        106
                    ],
                    "orderBy": [
                        53,
                        "[AuctionStatusOrderBy!]"
                    ],
                    "where": [
                        43
                    ]
                }
            ],
            "auctionStatusByPk": [
                40,
                {
                    "value": [
                        109,
                        "String!"
                    ]
                }
            ],
            "dutchAuction": [
                64,
                {
                    "distinctOn": [
                        85,
                        "[DutchAuctionSelectColumn!]"
                    ],
                    "limit": [
                        106
                    ],
                    "offset": [
                        106
                    ],
                    "orderBy": [
                        83,
                        "[DutchAuctionOrderBy!]"
                    ],
                    "where": [
                        72
                    ]
                }
            ],
            "dutchAuctionAggregate": [
                65,
                {
                    "distinctOn": [
                        85,
                        "[DutchAuctionSelectColumn!]"
                    ],
                    "limit": [
                        106
                    ],
                    "offset": [
                        106
                    ],
                    "orderBy": [
                        83,
                        "[DutchAuctionOrderBy!]"
                    ],
                    "where": [
                        72
                    ]
                }
            ],
            "dutchAuctionByPk": [
                64,
                {
                    "auctionId": [
                        117,
                        "uuid!"
                    ]
                }
            ],
            "__typename": [
                109
            ]
        },
        "Mutation": {
            "deleteAuctionMetadata": [
                16,
                {
                    "where": [
                        8,
                        "AuctionMetadataBoolExp!"
                    ]
                }
            ],
            "deleteAuctionMetadataByPk": [
                0,
                {
                    "id": [
                        117,
                        "uuid!"
                    ]
                }
            ],
            "deleteAuctionStatus": [
                50,
                {
                    "where": [
                        43,
                        "AuctionStatusBoolExp!"
                    ]
                }
            ],
            "deleteAuctionStatusByPk": [
                40,
                {
                    "value": [
                        109,
                        "String!"
                    ]
                }
            ],
            "deleteDutchAuction": [
                80,
                {
                    "where": [
                        72,
                        "DutchAuctionBoolExp!"
                    ]
                }
            ],
            "deleteDutchAuctionByPk": [
                64,
                {
                    "auctionId": [
                        117,
                        "uuid!"
                    ]
                }
            ],
            "insertAuctionMetadata": [
                16,
                {
                    "objects": [
                        11,
                        "[AuctionMetadataInsertInput!]!"
                    ],
                    "onConflict": [
                        17
                    ]
                }
            ],
            "insertAuctionMetadataOne": [
                0,
                {
                    "object": [
                        11,
                        "AuctionMetadataInsertInput!"
                    ],
                    "onConflict": [
                        17
                    ]
                }
            ],
            "insertAuctionStatus": [
                50,
                {
                    "objects": [
                        47,
                        "[AuctionStatusInsertInput!]!"
                    ],
                    "onConflict": [
                        52
                    ]
                }
            ],
            "insertAuctionStatusOne": [
                40,
                {
                    "object": [
                        47,
                        "AuctionStatusInsertInput!"
                    ],
                    "onConflict": [
                        52
                    ]
                }
            ],
            "insertDutchAuction": [
                80,
                {
                    "objects": [
                        75,
                        "[DutchAuctionInsertInput!]!"
                    ],
                    "onConflict": [
                        82
                    ]
                }
            ],
            "insertDutchAuctionOne": [
                64,
                {
                    "object": [
                        75,
                        "DutchAuctionInsertInput!"
                    ],
                    "onConflict": [
                        82
                    ]
                }
            ],
            "updateAuctionMetadata": [
                16,
                {
                    "_inc": [
                        10
                    ],
                    "_set": [
                        21
                    ],
                    "where": [
                        8,
                        "AuctionMetadataBoolExp!"
                    ]
                }
            ],
            "updateAuctionMetadataByPk": [
                0,
                {
                    "_inc": [
                        10
                    ],
                    "_set": [
                        21
                    ],
                    "pkColumns": [
                        19,
                        "AuctionMetadataPkColumnsInput!"
                    ]
                }
            ],
            "updateAuctionMetadataMany": [
                16,
                {
                    "updates": [
                        33,
                        "[AuctionMetadataUpdates!]!"
                    ]
                }
            ],
            "updateAuctionStatus": [
                50,
                {
                    "_set": [
                        56
                    ],
                    "where": [
                        43,
                        "AuctionStatusBoolExp!"
                    ]
                }
            ],
            "updateAuctionStatusByPk": [
                40,
                {
                    "_set": [
                        56
                    ],
                    "pkColumns": [
                        54,
                        "AuctionStatusPkColumnsInput!"
                    ]
                }
            ],
            "updateAuctionStatusMany": [
                50,
                {
                    "updates": [
                        60,
                        "[AuctionStatusUpdates!]!"
                    ]
                }
            ],
            "updateDutchAuction": [
                80,
                {
                    "_inc": [
                        74
                    ],
                    "_set": [
                        86
                    ],
                    "where": [
                        72,
                        "DutchAuctionBoolExp!"
                    ]
                }
            ],
            "updateDutchAuctionByPk": [
                64,
                {
                    "_inc": [
                        74
                    ],
                    "_set": [
                        86
                    ],
                    "pkColumns": [
                        84,
                        "DutchAuctionPkColumnsInput!"
                    ]
                }
            ],
            "updateDutchAuctionMany": [
                80,
                {
                    "updates": [
                        98,
                        "[DutchAuctionUpdates!]!"
                    ]
                }
            ],
            "__typename": [
                109
            ]
        },
        "Subscription": {
            "auctionMetadata": [
                0,
                {
                    "distinctOn": [
                        20,
                        "[AuctionMetadataSelectColumn!]"
                    ],
                    "limit": [
                        106
                    ],
                    "offset": [
                        106
                    ],
                    "orderBy": [
                        18,
                        "[AuctionMetadataOrderBy!]"
                    ],
                    "where": [
                        8
                    ]
                }
            ],
            "auctionMetadataAggregate": [
                1,
                {
                    "distinctOn": [
                        20,
                        "[AuctionMetadataSelectColumn!]"
                    ],
                    "limit": [
                        106
                    ],
                    "offset": [
                        106
                    ],
                    "orderBy": [
                        18,
                        "[AuctionMetadataOrderBy!]"
                    ],
                    "where": [
                        8
                    ]
                }
            ],
            "auctionMetadataByPk": [
                0,
                {
                    "id": [
                        117,
                        "uuid!"
                    ]
                }
            ],
            "auctionMetadataStream": [
                0,
                {
                    "batchSize": [
                        106,
                        "Int!"
                    ],
                    "cursor": [
                        28,
                        "[AuctionMetadataStreamCursorInput]!"
                    ],
                    "where": [
                        8
                    ]
                }
            ],
            "auctionStatus": [
                40,
                {
                    "distinctOn": [
                        55,
                        "[AuctionStatusSelectColumn!]"
                    ],
                    "limit": [
                        106
                    ],
                    "offset": [
                        106
                    ],
                    "orderBy": [
                        53,
                        "[AuctionStatusOrderBy!]"
                    ],
                    "where": [
                        43
                    ]
                }
            ],
            "auctionStatusAggregate": [
                41,
                {
                    "distinctOn": [
                        55,
                        "[AuctionStatusSelectColumn!]"
                    ],
                    "limit": [
                        106
                    ],
                    "offset": [
                        106
                    ],
                    "orderBy": [
                        53,
                        "[AuctionStatusOrderBy!]"
                    ],
                    "where": [
                        43
                    ]
                }
            ],
            "auctionStatusByPk": [
                40,
                {
                    "value": [
                        109,
                        "String!"
                    ]
                }
            ],
            "auctionStatusStream": [
                40,
                {
                    "batchSize": [
                        106,
                        "Int!"
                    ],
                    "cursor": [
                        57,
                        "[AuctionStatusStreamCursorInput]!"
                    ],
                    "where": [
                        43
                    ]
                }
            ],
            "dutchAuction": [
                64,
                {
                    "distinctOn": [
                        85,
                        "[DutchAuctionSelectColumn!]"
                    ],
                    "limit": [
                        106
                    ],
                    "offset": [
                        106
                    ],
                    "orderBy": [
                        83,
                        "[DutchAuctionOrderBy!]"
                    ],
                    "where": [
                        72
                    ]
                }
            ],
            "dutchAuctionAggregate": [
                65,
                {
                    "distinctOn": [
                        85,
                        "[DutchAuctionSelectColumn!]"
                    ],
                    "limit": [
                        106
                    ],
                    "offset": [
                        106
                    ],
                    "orderBy": [
                        83,
                        "[DutchAuctionOrderBy!]"
                    ],
                    "where": [
                        72
                    ]
                }
            ],
            "dutchAuctionByPk": [
                64,
                {
                    "auctionId": [
                        117,
                        "uuid!"
                    ]
                }
            ],
            "dutchAuctionStream": [
                64,
                {
                    "batchSize": [
                        106,
                        "Int!"
                    ],
                    "cursor": [
                        93,
                        "[DutchAuctionStreamCursorInput]!"
                    ],
                    "where": [
                        72
                    ]
                }
            ],
            "__typename": [
                109
            ]
        }
    }
}