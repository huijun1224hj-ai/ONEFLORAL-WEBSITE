const statusEl=document.getElementById('status');

if(SHOP.supabaseUrl.includes('PASTE')){
  statusEl.textContent='请先填写 config.js 的 Supabase 资料';
}

const sb=supabase.createClient(SHOP.supabaseUrl,SHOP.supabaseAnonKey);

document.getElementById('saveBtn').onclick=async()=>{
  const file=document.getElementById('photo').files[0];

  if(!file){
    statusEl.textContent='请选择照片';
    return;
  }

  statusEl.textContent='Uploading...';

  const filename=`${Date.now()}-${file.name.replaceAll(' ','-')}`;

  const upload=await sb.storage
    .from('product-images')
    .upload(filename,file,{upsert:false});

  if(upload.error){
    statusEl.textContent='照片上传失败：'+upload.error.message;
    return;
  }

  const publicUrl=sb.storage
    .from('product-images')
    .getPublicUrl(filename).data.publicUrl;

  const row={
    title_cn:titleCN.value,
    title_en:titleEN.value,
    category:category.value,
    price:price.value,
    description:description.value,
    image_url:publicUrl,
    active:true
  };

  const ins=await sb.from('products').insert(row);

  if(ins.error){
    statusEl.textContent='保存失败：'+ins.error.message;
    return;
  }

  statusEl.textContent='成功上传';
  loadList();
};

async function loadList(){
  const {data}=await sb
    .from('products')
    .select('*')
    .order('created_at',{ascending:false});

  const box=document.getElementById('adminList');

  box.innerHTML=(data||[]).map(item=>`
    <div style="margin-bottom:20px;padding:12px;border:1px solid #333;border-radius:16px;">
      <img src="${item.image_url}" style="width:100%;border-radius:12px;">
      <h3>${item.title_cn||''}</h3>
      <p>${item.price||''}</p>
    </div>
  `).join('');
}

if(!SHOP.supabaseUrl.includes('PASTE')){
  loadList();
}
