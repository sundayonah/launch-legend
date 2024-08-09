import { GeneratedType } from "@cosmjs/proto-signing";
import { ParamChange } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/params/v1beta1/params";
import { QueryParamsRequest } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/params/v1beta1/query";
import { QuerySubspacesRequest } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/params/v1beta1/query";
import { QuerySubspacesResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/params/v1beta1/query";
import { Subspace } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/params/v1beta1/query";
import { ParameterChangeProposal } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/params/v1beta1/params";
import { QueryParamsResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/params/v1beta1/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cosmos.params.v1beta1.ParamChange", ParamChange],
    ["/cosmos.params.v1beta1.QueryParamsRequest", QueryParamsRequest],
    ["/cosmos.params.v1beta1.QuerySubspacesRequest", QuerySubspacesRequest],
    ["/cosmos.params.v1beta1.QuerySubspacesResponse", QuerySubspacesResponse],
    ["/cosmos.params.v1beta1.Subspace", Subspace],
    ["/cosmos.params.v1beta1.ParameterChangeProposal", ParameterChangeProposal],
    ["/cosmos.params.v1beta1.QueryParamsResponse", QueryParamsResponse],
    
];

export { msgTypes }