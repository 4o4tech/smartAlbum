/*
 * Copyright © Yan Zhenjie. All Rights Reserved
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.yanzhenjie.album.api;

import android.content.Context;
import android.support.annotation.IntRange;
import android.support.annotation.NonNull;

/**
 * Created by YanZhenjie on 2017/11/8.
 */
public abstract class BasicChoiceVideoWrapper<Returner extends BasicChoiceVideoWrapper, Result, Cancel, Checked> extends BasicChoiceWrapper<Returner, Result, Cancel, Checked> {

    BasicChoiceVideoWrapper(@NonNull Context context) {
        super(context);
    }

    @IntRange(from = 0, to = 1)
    int mQuality = 1;
    @IntRange(from = 1, to = Long.MAX_VALUE)
    long mLimitDuration = Long.MAX_VALUE;
    @IntRange(from = 1, to = Long.MAX_VALUE)
    long mLimitBytes = Long.MAX_VALUE;

    /**
     * Currently value 0 means low quality, suitable for MMS messages, and  value 1 means high quality.
     */
    public Returner quality(@IntRange(from = 0, to = 1) int quality) {
        this.mQuality = quality;
        return (Returner) this;
    }

    /**
     * Specify the maximum allowed recording duration in seconds.
     */
    public Returner limitDuration(@IntRange(from = 1, to = Long.MAX_VALUE) long duration) {
        this.mLimitDuration = duration;
        return (Returner) this;
    }

    /**
     * Specify the maximum allowed size.
     */
    public Returner limitBytes(@IntRange(from = 1, to = Long.MAX_VALUE) long bytes) {
        this.mLimitBytes = bytes;
        return (Returner) this;
    }
}
