import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryParamsRequest } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/applications/interchain_accounts/host/v1/query";
import { QueryParamsResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/applications/interchain_accounts/host/v1/query";
import { MsgModuleQuerySafeResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/applications/interchain_accounts/host/v1/tx";
import { MsgUpdateParams } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/applications/interchain_accounts/host/v1/tx";
import { MsgModuleQuerySafe } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/applications/interchain_accounts/host/v1/tx";
import { Params } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/applications/interchain_accounts/host/v1/host";
import { QueryRequest } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/applications/interchain_accounts/host/v1/host";
import { MsgUpdateParamsResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.3.1/proto/ibc/applications/interchain_accounts/host/v1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/ibc.applications.interchain_accounts.host.v1.QueryParamsRequest", QueryParamsRequest],
    ["/ibc.applications.interchain_accounts.host.v1.QueryParamsResponse", QueryParamsResponse],
    ["/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafeResponse", MsgModuleQuerySafeResponse],
    ["/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams", MsgUpdateParams],
    ["/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe", MsgModuleQuerySafe],
    ["/ibc.applications.interchain_accounts.host.v1.Params", Params],
    ["/ibc.applications.interchain_accounts.host.v1.QueryRequest", QueryRequest],
    ["/ibc.applications.interchain_accounts.host.v1.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    
];

export { msgTypes }