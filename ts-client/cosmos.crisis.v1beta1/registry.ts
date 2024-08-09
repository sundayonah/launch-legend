import { GeneratedType } from "@cosmjs/proto-signing";
import { GenesisState } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/crisis/v1beta1/genesis";
import { MsgVerifyInvariant } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/crisis/v1beta1/tx";
import { MsgVerifyInvariantResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/crisis/v1beta1/tx";
import { MsgUpdateParams } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/crisis/v1beta1/tx";
import { MsgUpdateParamsResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/crisis/v1beta1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cosmos.crisis.v1beta1.GenesisState", GenesisState],
    ["/cosmos.crisis.v1beta1.MsgVerifyInvariant", MsgVerifyInvariant],
    ["/cosmos.crisis.v1beta1.MsgVerifyInvariantResponse", MsgVerifyInvariantResponse],
    ["/cosmos.crisis.v1beta1.MsgUpdateParams", MsgUpdateParams],
    ["/cosmos.crisis.v1beta1.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    
];

export { msgTypes }