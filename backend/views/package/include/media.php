<?php 
$url = Yii::$app->urlManager->createUrl(['package/upload-media']);
?>

<div style="min-height: 955.8px;">
    <!-- Content Header (Page header) -->
      <div class="row">
        <!-- left column -->
        <div class="col-md-6">
          <!-- general form elements -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Media</h3>
            </div>
            <div class="box-body">
              <div class="form-group">
                  <label for="Image type"> Image Type</label>
                 <select  v-model="media_type" class="form-control">
                    <option v-for="item in mediaList" :value="item.value">{{item.name}}</option>
                 </select>
              </div>
              <ul>
                <li v-for="file in files">{{file.name}} - Error: {{file.error}}, Success: {{file.success}}</li>
              </ul>
              <file-upload
                ref="upload"
                v-model="files"
                post-action="<?=$url;?>"
                @input-file="inputFile"
                @input-filter="inputFilter"
                :data="{media_type: media_type}"
              >
              <span class="btn btn-primary">Browse file</span>
              </file-upload>
              <button v-show="!$refs.upload || !$refs.upload.active" @click.prevent="$refs.upload.active = true" type="button">Start upload</button>
              <button v-show="$refs.upload && $refs.upload.active" @click.prevent="$refs.upload.active = false" type="button">Stop upload</button>
            </div>
          </div>
          <!-- /.box -->



         

        </div>
      
      </div>
      <!-- /.row -->
  </div>