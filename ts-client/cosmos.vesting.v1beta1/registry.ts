import { GeneratedType } from "@cosmjs/proto-signing";
import { PeriodicVestingAccount } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/vesting/v1beta1/vesting";
import { BaseVestingAccount } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/vesting/v1beta1/vesting";
import { Period } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/vesting/v1beta1/vesting";
import { MsgCreateVestingAccount } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/vesting/v1beta1/tx";
import { ContinuousVestingAccount } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/vesting/v1beta1/vesting";
import { PermanentLockedAccount } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/vesting/v1beta1/vesting";
import { MsgCreateVestingAccountResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/vesting/v1beta1/tx";
import { MsgCreatePeriodicVestingAccount } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/vesting/v1beta1/tx";
import { MsgCreatePeriodicVestingAccountResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/vesting/v1beta1/tx";
import { DelayedVestingAccount } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/vesting/v1beta1/vesting";
import { MsgCreatePermanentLockedAccount } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/vesting/v1beta1/tx";
import { MsgCreatePermanentLockedAccountResponse } from "./types/../../../../../../../home/onahsunday/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.8/proto/cosmos/vesting/v1beta1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cosmos.vesting.v1beta1.PeriodicVestingAccount", PeriodicVestingAccount],
    ["/cosmos.vesting.v1beta1.BaseVestingAccount", BaseVestingAccount],
    ["/cosmos.vesting.v1beta1.Period", Period],
    ["/cosmos.vesting.v1beta1.MsgCreateVestingAccount", MsgCreateVestingAccount],
    ["/cosmos.vesting.v1beta1.ContinuousVestingAccount", ContinuousVestingAccount],
    ["/cosmos.vesting.v1beta1.PermanentLockedAccount", PermanentLockedAccount],
    ["/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse", MsgCreateVestingAccountResponse],
    ["/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount", MsgCreatePeriodicVestingAccount],
    ["/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse", MsgCreatePeriodicVestingAccountResponse],
    ["/cosmos.vesting.v1beta1.DelayedVestingAccount", DelayedVestingAccount],
    ["/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount", MsgCreatePermanentLockedAccount],
    ["/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse", MsgCreatePermanentLockedAccountResponse],
    
];

export { msgTypes }