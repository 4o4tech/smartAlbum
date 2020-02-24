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
package com.yanzhenjie.album.impl;

import com.yanzhenjie.album.AlbumFile;

import java.util.ArrayList;

/**
 * <p>Action album results.</p>
 * Created by yanzhenjie on 17-3-28.
 */
public interface AlbumCallback {

    /**
     * Photo album callback selection result.
     *
     * @param albumFiles file path list.
     */
    void onAlbumResult(ArrayList<AlbumFile> albumFiles);

    /**
     * The album canceled the operation.
     */
    void onAlbumCancel();


}