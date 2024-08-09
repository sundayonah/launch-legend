import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryGrantsResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/authz/v1beta1/query";
import { MsgGrantResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/authz/v1beta1/tx";
import { MsgRevoke } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/authz/v1beta1/tx";
import { GenesisState } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/authz/v1beta1/genesis";
import { QueryGrantsRequest } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/authz/v1beta1/query";
import { GrantQueueItem } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/authz/v1beta1/authz";
import { MsgGrant } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/authz/v1beta1/tx";
import { MsgRevokeResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/authz/v1beta1/tx";
import { GenericAuthorization } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/authz/v1beta1/authz";
import { QueryGranterGrantsRequest } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/authz/v1beta1/query";
import { GrantAuthorization } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/authz/v1beta1/authz";
import { MsgExec } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/authz/v1beta1/tx";
import { QueryGranterGrantsResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/authz/v1beta1/query";
import { QueryGranteeGrantsRequest } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/authz/v1beta1/query";
import { QueryGranteeGrantsResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/authz/v1beta1/query";
import { EventRevoke } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/authz/v1beta1/event";
import { Grant } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/authz/v1beta1/authz";
import { MsgExecResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/authz/v1beta1/tx";
import { EventGrant } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/authz/v1beta1/event";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cosmos.authz.v1beta1.QueryGrantsResponse", QueryGrantsResponse],
    ["/cosmos.authz.v1beta1.MsgGrantResponse", MsgGrantResponse],
    ["/cosmos.authz.v1beta1.MsgRevoke", MsgRevoke],
    ["/cosmos.authz.v1beta1.GenesisState", GenesisState],
    ["/cosmos.authz.v1beta1.QueryGrantsRequest", QueryGrantsRequest],
    ["/cosmos.authz.v1beta1.GrantQueueItem", GrantQueueItem],
    ["/cosmos.authz.v1beta1.MsgGrant", MsgGrant],
    ["/cosmos.authz.v1beta1.MsgRevokeResponse", MsgRevokeResponse],
    ["/cosmos.authz.v1beta1.GenericAuthorization", GenericAuthorization],
    ["/cosmos.authz.v1beta1.QueryGranterGrantsRequest", QueryGranterGrantsRequest],
    ["/cosmos.authz.v1beta1.GrantAuthorization", GrantAuthorization],
    ["/cosmos.authz.v1beta1.MsgExec", MsgExec],
    ["/cosmos.authz.v1beta1.QueryGranterGrantsResponse", QueryGranterGrantsResponse],
    ["/cosmos.authz.v1beta1.QueryGranteeGrantsRequest", QueryGranteeGrantsRequest],
    ["/cosmos.authz.v1beta1.QueryGranteeGrantsResponse", QueryGranteeGrantsResponse],
    ["/cosmos.authz.v1beta1.EventRevoke", EventRevoke],
    ["/cosmos.authz.v1beta1.Grant", Grant],
    ["/cosmos.authz.v1beta1.MsgExecResponse", MsgExecResponse],
    ["/cosmos.authz.v1beta1.EventGrant", EventGrant],
    
];

export { msgTypes }