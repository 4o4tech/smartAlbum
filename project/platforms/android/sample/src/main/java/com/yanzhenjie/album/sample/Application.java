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
package com.yanzhenjie.album.sample;

import com.yanzhenjie.album.Album;
import com.yanzhenjie.album.AlbumConfig;
import com.yanzhenjie.album.sample.load.GlideAlbumLoader;

import java.util.Locale;

/**
 * <p>Application.</p>
 * Created by Yan Zhenjie on 2016/10/30.
 */
public class Application extends android.app.Application {

    private static Application instance;

    @Override
    public void onCreate() {
        super.onCreate();
        if (instance == null) {
            instance = this;

            Album.initialize(
                    AlbumConfig.newBuilder(instance)
                            .setAlbumLoader(new GlideAlbumLoader()) // This is not necessary.
                            .setLocale(Locale.getDefault())
                            .build()
            );
        }
    }

    public static Application getInstance() {
        return instance;
    }
}
