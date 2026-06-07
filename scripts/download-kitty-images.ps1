$root = Join-Path $PSScriptRoot "..\client\public\manus-storage"
$ErrorActionPreference = "SilentlyContinue"

$sets = @(
  @{ folder = "insane"; base = "https://kitty.org/"; files = @("iris2.jpg","tattoo2.jpg","kita.jpg") },
  @{ folder = "places"; base = "https://kitty.org/"; files = @("GearsCheersLogoCrop.jpg","CowboyFoodDrink.gif","BlueRock.jpg") },
  @{ folder = "dog-food"; base = "https://kitty.org/"; files = @("K0107001.jpg","K0107002.jpg","K0107003.jpg","K0107004.jpg","K0107005.jpg","K0107006.jpg","K0107007.jpg","K0107008.jpg","K0107009.jpg","K0107010.jpg","K0107011.jpg") },
  @{ folder = "3jane"; base = "https://kitty.org/"; files = @("3j2001.jpg","3j2002.jpg","3j2003.jpg","3j2004.jpg","3j2005.jpg","3j2007.jpg","flyn.jpg") },
  @{ folder = "lakeview"; base = "https://kitty.org/lakeview/"; files = @("cemet001.jpg","cemet002.jpg","cemet003.jpg","cemet004.jpg","cemet005.jpg","cemet006.jpg","cemet007.jpg","cemet008.jpg","cemet009.jpg","cemet010.jpg","cemet012.jpg","cemet015.jpg","cemet016.jpg","cemet017.jpg","cemet018.jpg","cemet019.jpg","cemet021.jpg","cemet022.jpg","cemet024.jpg","cemet026.jpg","cemet027.jpg","cemet028.jpg","cemet029.jpg","cemet031.jpg","cemet032.jpg","cemet033.jpg","cemet034.jpg","cemet035.jpg","cemet036.jpg","cemet037.jpg","cemet038.jpg","cemet039.jpg","cemet040.jpg","cemet041.jpg","cemet042.jpg","cemet043.jpg","cemet044.jpg","cemet052.jpg","cemet053.jpg","cemet054.jpg","cemet055.jpg","cemet056.jpg","cemet058.jpg","cemet059.jpg","cemet060.jpg","cemet061.jpg","cemet062.jpg","cemet063.jpg","cemet064.jpg","cemet065.jpg","cemet066.jpg","cemet067.jpg","cemet068.jpg","cemet069.jpg","cemet070.jpg","cemet071.jpg","cemet072.jpg","cemet073.jpg") },
  @{ folder = "kritters"; base = "https://kitty.org/kritters/"; files = @("cateyes.gif","womintro.jpg","FEEDME2.jpg","wombat.jpg","woscar.jpg","feedme3.jpg","leon.jpg","mask.jpg","leo.jpg","bez.jpg","mp.jpg","mickey.jpg","cricket.jpg") },
  @{ folder = "winter"; base = "https://kitty.org/"; files = @("CLEVE001.jpg","CLEVE002.jpg","CLEVE003.jpg","CLEVE004.jpg","CLEVE005.jpg","CLEVE006.jpg","CLEVE007.jpg","CLEVE008.jpg","CLEVE009.jpg","CLEVE010.jpg","CLEVE011.jpg","CLEVE012.jpg","CLEVE013.jpg") },
  @{ folder = "family"; base = "https://kitty.org/"; files = @("ktjeep.jpg","wayneboat.jpg","aja2.jpg","spudman.jpg","maxkt5.jpg","lenny.jpg") },
  @{ folder = "kittens"; base = "https://kitty.org/"; files = @("kittens1.jpg","kittens2.jpg","kittens3.jpg","kittens5.jpg","kittens6.jpg","kittens7.jpg","kittens8.jpg","KITTI016.jpg") },
  @{ folder = "gene"; base = "https://kitty.org/"; files = @("aqua33.jpg","aquakit.jpg","gene.JPG") },
  @{ folder = "louie2003"; base = "https://kitty.org/"; files = @("LOUIE132.jpg","LOUIE147.jpg","LOUIE163.jpg","LOUIE172.jpg","LOUIE175.jpg","LOUIE177.jpg","LOUIE181.jpg","LOUIE184.jpg","LOUIE191.jpg","LOUIE194.jpg","LOUIE199.jpg","LOUIE208.jpg","LOUIE216.jpg","LOUIE233.jpg") },
  @{ folder = "harley"; base = "https://kitty.org/HD/"; files = @("HARLE001.jpg","HARLE002.jpg","HARLE003.jpg","HARLE004.jpg","HARLE005.jpg","HARLE006.jpg","HARLE007.jpg","HARLE008.jpg","HARLE009.jpg","HARLE010.jpg","HARLE011.jpg","HARLE012.jpg","HARLE013.jpg","HARLE014.jpg","HARLE015.jpg","HARLE016.jpg","HARLE017.jpg","HARLE018.jpg","HARLE019.jpg","HARLE020.jpg","HARLE021.jpg","HARLE022.jpg","HARLE024.jpg","HARLE025.jpg","HARLE026.jpg","HARLE027.jpg","HARLE028.jpg","HARLE029.jpg","HARLE030.jpg","HARLE031.jpg","HARLE032.jpg","HARLE033.jpg","HARLE034.jpg","HARLE035.jpg","HARLE036.jpg","HARLE037.jpg","HARLE038.jpg","HARLE039.jpg","HARLE040.jpg","HARLE041.jpg","HARLE042.jpg","HARLE043.jpg","HARLE044.jpg","HARLE045.jpg","HARLE046.jpg","HARLE047.jpg","HARLE048.jpg","HARLE049.jpg","HARLE050.jpg","HARLE051.jpg") },
  @{ folder = "daffodil"; base = "https://kitty.org/daffodil/"; files = @("c100_4052.jpg","c100_4053.jpg","c100_4058.JPG","c100_4070.JPG","c100_4081.JPG","c100_4082.JPG","c100_4085.JPG","c100_4088.JPG","c100_4089.JPG","c100_4093.jpg","c100_4095.jpg","c100_4097.jpg","c100_4098.JPG","c100_4099.JPG","c100_4107.jpg","c100_4110.jpg","c100_4047.jpg") }
)

$ok = 0
$fail = 0

foreach ($set in $sets) {
  $dir = Join-Path $root $set.folder
  New-Item -ItemType Directory -Force -Path $dir | Out-Null
  foreach ($file in $set.files) {
    $url = $set.base + $file
    $out = Join-Path $dir $file
    try {
      Invoke-WebRequest -Uri $url -OutFile $out -UseBasicParsing
      if (Test-Path $out) { $ok++; Write-Host "OK $url" } else { $fail++; Write-Host "FAIL $url" }
    } catch {
      $fail++
      Write-Host "FAIL $url"
    }
  }
}

Write-Host "Done: $ok downloaded, $fail failed"
