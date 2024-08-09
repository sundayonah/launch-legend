import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgConnectionOpenAck } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/tx";
import { MsgConnectionOpenConfirm } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/tx";
import { QueryConnectionClientStateRequest } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/query";
import { QueryConnectionConsensusStateResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/query";
import { ConnectionEnd } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/connection";
import { ClientPaths } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/connection";
import { MsgConnectionOpenAckResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/tx";
import { MsgUpdateParamsResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/tx";
import { QueryConnectionResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/query";
import { QueryClientConnectionsRequest } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/query";
import { QueryConnectionConsensusStateRequest } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/query";
import { QueryConnectionParamsRequest } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/query";
import { MsgConnectionOpenTryResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/tx";
import { QueryConnectionsResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/query";
import { GenesisState } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/genesis";
import { MsgConnectionOpenTry } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/tx";
import { MsgUpdateParams } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/tx";
import { QueryConnectionRequest } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/query";
import { IdentifiedConnection } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/connection";
import { MsgConnectionOpenInitResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/tx";
import { QueryConnectionsRequest } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/query";
import { QueryConnectionParamsResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/query";
import { Params } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/connection";
import { QueryConnectionClientStateResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/query";
import { Counterparty } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/connection";
import { MsgConnectionOpenConfirmResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/tx";
import { ConnectionPaths } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/connection";
import { QueryClientConnectionsResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/query";
import { Version } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/connection";
import { MsgConnectionOpenInit } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/core/connection/v1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/ibc.core.connection.v1.MsgConnectionOpenAck", MsgConnectionOpenAck],
    ["/ibc.core.connection.v1.MsgConnectionOpenConfirm", MsgConnectionOpenConfirm],
    ["/ibc.core.connection.v1.QueryConnectionClientStateRequest", QueryConnectionClientStateRequest],
    ["/ibc.core.connection.v1.QueryConnectionConsensusStateResponse", QueryConnectionConsensusStateResponse],
    ["/ibc.core.connection.v1.ConnectionEnd", ConnectionEnd],
    ["/ibc.core.connection.v1.ClientPaths", ClientPaths],
    ["/ibc.core.connection.v1.MsgConnectionOpenAckResponse", MsgConnectionOpenAckResponse],
    ["/ibc.core.connection.v1.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/ibc.core.connection.v1.QueryConnectionResponse", QueryConnectionResponse],
    ["/ibc.core.connection.v1.QueryClientConnectionsRequest", QueryClientConnectionsRequest],
    ["/ibc.core.connection.v1.QueryConnectionConsensusStateRequest", QueryConnectionConsensusStateRequest],
    ["/ibc.core.connection.v1.QueryConnectionParamsRequest", QueryConnectionParamsRequest],
    ["/ibc.core.connection.v1.MsgConnectionOpenTryResponse", MsgConnectionOpenTryResponse],
    ["/ibc.core.connection.v1.QueryConnectionsResponse", QueryConnectionsResponse],
    ["/ibc.core.connection.v1.GenesisState", GenesisState],
    ["/ibc.core.connection.v1.MsgConnectionOpenTry", MsgConnectionOpenTry],
    ["/ibc.core.connection.v1.MsgUpdateParams", MsgUpdateParams],
    ["/ibc.core.connection.v1.QueryConnectionRequest", QueryConnectionRequest],
    ["/ibc.core.connection.v1.IdentifiedConnection", IdentifiedConnection],
    ["/ibc.core.connection.v1.MsgConnectionOpenInitResponse", MsgConnectionOpenInitResponse],
    ["/ibc.core.connection.v1.QueryConnectionsRequest", QueryConnectionsRequest],
    ["/ibc.core.connection.v1.QueryConnectionParamsResponse", QueryConnectionParamsResponse],
    ["/ibc.core.connection.v1.Params", Params],
    ["/ibc.core.connection.v1.QueryConnectionClientStateResponse", QueryConnectionClientStateResponse],
    ["/ibc.core.connection.v1.Counterparty", Counterparty],
    ["/ibc.core.connection.v1.MsgConnectionOpenConfirmResponse", MsgConnectionOpenConfirmResponse],
    ["/ibc.core.connection.v1.ConnectionPaths", ConnectionPaths],
    ["/ibc.core.connection.v1.QueryClientConnectionsResponse", QueryClientConnectionsResponse],
    ["/ibc.core.connection.v1.Version", Version],
    ["/ibc.core.connection.v1.MsgConnectionOpenInit", MsgConnectionOpenInit],
    
];

export { msgTypes }