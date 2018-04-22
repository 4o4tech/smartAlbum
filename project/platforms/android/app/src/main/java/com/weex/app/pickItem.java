package com.weex.app;

import android.app.Activity;
import android.content.Intent;
import android.support.annotation.NonNull;
import android.view.View;
import android.widget.Toast;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.common.WXModule;
import com.yanzhenjie.album.Action;
import com.yanzhenjie.album.Album;
import com.yanzhenjie.album.AlbumFile;
import com.yanzhenjie.album.api.widget.Widget;
import com.yanzhenjie.album.ui.AlbumActivity;

import java.util.ArrayList;


/**
 * Created by jimze on 22/04/2018.
 */

public class pickItem extends WXModule {


        //run ui thread
        @JSMethod(uiThread = true)
        public void printLog(String msg) {
            Toast.makeText(mWXSDKInstance.getContext(),msg, Toast.LENGTH_SHORT).show();

        }

        //run JS thread
        @JSMethod (uiThread = false)
        public void fireEventSyncCall(){
            //implement your module logic here
        }

        //run JS thread
        @JSMethod (uiThread = true)
        public void pickImageVideo(){
                //implement your module logic here


//                Intent intent = new Intent(Intent.ACTION_VIEW, AlbumActivity.class);
//                intent.addCategory(WEEX_CATEGORY);
//                mWXSDKInstance.getContext().startActivity(intent);


//                Intent intent = new Intent(pickItem, AlbumActivity.class);

//                mWXSDKInstance.getContext().startActivity(intent);
//
//                Intent intent = new Intent(Intent.ACTION_VIEW, AlbumActivity);
//                intent.addCategory(Intent.CATEGORY_DEFAULT);
//                intent.addCategory("com.moon.android.intent.category.WEEX");
//                Activity activity = (Activity) mWXSDKInstance.getContext();
//
//                activity.startActivity(intent);



//                AlbumActivity start = new AlbumActivity();
        }

}
