/// <reference path="go/Types/global.d.ts" />

import * as go from "go/Types/global.d.ts";

declare global {
  type Dict<K, V> = go.Dict<K, V>;
}
