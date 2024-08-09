package keeper

import (
	"autheo/x/autheo/types"
)

var _ types.QueryServer = Keeper{}
