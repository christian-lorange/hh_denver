clear all

data=readtable('database_working.xlsx');

s1='<div class="venue" data-id="aloe" data-category="';  %add in categories
s2='" onclick="openModal();currentSlide('; %add in index number
s3="); ga_anl('send', 'event', 'Venue', 'Viewed Happy Hour', *"
s3b='*)"> <span class="location">'; %add in location name
s4='</span><span class="area">'; %add in area
s5='</span> <span class="sunday hh_t">'; %add in sunday
s6='</span><span class="monday hh_t">'; %add in monday
s7='</span><span class="tuesday hh_t">'; %add in tues
s8='</span><span class="wednesday hh_t">'; %add in wed
s9='</span><span class="thursday hh_t">'; %add in thurs
s10='</span><span class="friday hh_t">'; %add in Frid
s11='</span><span class="saturday hh_t">'; %add in sat
s12='</span><span class="icon">'; %add in icons
s13='</span></div>';



v=[];

for i=1:height(data)
  
    
    venues=strcat(s1,char(table2array(data(i,56))),s2,num2str(i),s3,char(table2array(data(i,1))),s3b,char(table2array(data(i,1))),s4,char(table2array(data(i,57))),s5,char(table2array(data(i,36))),s6,char(table2array(data(i,37))),s7,char(table2array(data(i,38))),s8,char(table2array(data(i,39))),s9,char(table2array(data(i,40))),s10,char(table2array(data(i,41))),s11,char(table2array(data(i,42))),s12,char(table2array(data(i,55))),s13);
    
    v=[v;{venues}];
    
end

filePh = fopen('v.txt','w');
fprintf(filePh,'%s\n',v{:});
fclose(filePh);

fid = fopen('v.txt','rt') ;
X = fread(fid) ;
fclose(fid) ;
X = char(X.') ;
% replace string S1 with string S2
Y = strrep(X, '@', '"') ;
Z = strrep(Y, '.3', ':30') ;
fid2 = fopen('hh.html','wt') ;
fwrite(fid2,Z) ;
fclose (fid2) ;



s1='var hh = {0: {    0: {        1:';
s2=',2:';
s3=',3:';
s4=',4:';
s5=',5:';
s6=',6:';

hhjs=[];
 
for i=1:height(data)
    
    i;
    hh=[];
    for j=1:7
    
        
        
    hh_t=strcat(num2str(j-1),': {1:',num2str(table2array(data(i,20+(j*2)))),',2:',num2str(table2array(data(i,21+(j*2)))),'}');
     
    if j==1
    hh=[hh,hh_t];
    else
    hh=[hh,',',hh_t];   
    end
    
    
    end
    
    hhjs=[hhjs,num2str(i-1),':{',hh,'},'];
    
    
end

hhjs=strcat('var hh = {',hhjs,'};');

filePh = fopen('hhjs.txt','w');
fprintf(filePh,'%s\n',hhjs);
fclose(filePh);

fid = fopen('hhjs.txt','rt') ;
X = fread(fid) ;
fclose(fid) ;
X = char(X.') ;
% replace string S1 with string S2
Y = strrep(X, strcat('val =','''','var hh"'), 'var hh') ;
Z = strrep(Y, 'NaN', '0') ;
ZZ = strrep(Z, ',};', '};') ;
fid2 = fopen('hhjs.txt','wt') ;
fwrite(fid2,ZZ) ;
fclose (fid2) ;


s1='<b>Name:</b>'; %{Name}
s2=strcat('<br><b>Address:</b><a href=','''','http://maps.google.com/?q=');% {Location}
s2b=strcat('''',' target=','''','_system','''',' title=','''','Directions','''','>');
s3='</a><br><b>Happy Hour Times:</b><br>Sunday:';%{Sun Start}-{Sun End}
s4='<br>Monday:';%{Mon Start}-{Mon End}
s5='<br>Tuesday:';%{Tues Start}-{Tues End}
s6='<br>Wednesday:';%{Wed Start}-{Wed End}
s7='<br>Thursday:';%{Thur Start}-{Thur End}
s8='<br>Friday:';%{Fri Start}-{Fri End}
s9='<br>Saturday:';%{Sat Start}-{Sat End}



s11='';

complete=[];
modal=[];

for i=1:height(data)
    
    
    if strcmp(char(table2cell(data(i,47))),'true')==1;
        s10='<br><b>Happy Hour Deals:</b><br>';%{Description}
    else
        sl0='';
    end
    
    
    if ((table2array(data(i,61))))==1
   s10b='<br><b>Kids Deals:</b><br>';
   s10c= char(table2array(data(i,63)));
else
    s10b='';
    s10c='';
end
  
    
    cards=strcat(s1,char(table2array(data(i,1))),s2,char(table2array(data(i,6))),s2b,char(table2array(data(i,6))),s3,char(table2array(data(i,36))),s4,char(table2array(data(i,37))),s5,char(table2array(data(i,38))),s6,char(table2array(data(i,39))),s7,char(table2array(data(i,40))),s8,char(table2array(data(i,41))),s9,char(table2array(data(i,42))),char(s10),char(table2array(data(i,21))),char(s10b),char(s10c),s11,'",');
    
    complete=[complete;{cards}];
    
    modal=[modal;{strcat('<div class="mySlides">',cards,'</div>')}];
    
end
    
filePh = fopen('comp.txt','w');
fprintf(filePh,'%s\n',complete{:});
fclose(filePh);

fid = fopen('comp.txt','rt') ;
X = fread(fid) ;
fclose(fid) ;
X = char(X.') ;
% replace string S1 with string S2
Y = strrep(X, '<b>Name', '"<b>Name');
fid2 = fopen('comp.txt','wt');
fwrite(fid2,Y) ;
fclose (fid2) ;

filePh = fopen('modal.txt','w');
fprintf(filePh,'%s\n',modal{:});
fclose(filePh);

fid = fopen('modal.txt','rt') ;
X = fread(fid) ;
fclose(fid) ;
X = char(X.') ;
% replace string S1 with string S2
Y = strrep(X, ' /n ', '"<br>');
Z = strrep(Y, '<br>",</div>', '<br></div>');
ZZ = strrep(Z, '.3', ':30');
a = strrep(ZZ, '",', '');
fid2 = fopen('cards.html','wt');
fwrite(fid2,a) ;
fclose (fid2) ;


gps=[];

for i=1:height(data)
  

    loc=char(table2array(data(i,60)));
    
    gps=[gps;{loc}];
    

end

gps=['var gps=[';gps];

str = strjoin(gps);
gps=char(str);
gps=gps(1:end-1);
gps=[gps;{'];'}];

filePh = fopen('gps.txt','w');
fprintf(filePh,'%s\n',gps{:});
fclose(filePh);

%% Calculate range
filePh = fopen('range.txt','w');
range=['range = ',num2str(height(data)),';']
fprintf(filePh,'%s\n',range);
fclose(filePh);



%% Call system commands to combine files


filePh = fopen('update.txt','w');
date=['//file updated at ', datestr(now,'mm/dd/yy HH:MM:SS.FFF')];
fprintf(filePh,'%s\n',date);
fclose(filePh);

system('type update.txt r1.txt hhjs.txt r2.txt >js/resources.js')

system('type update.txt mr1.txt range.txt hhjs.txt mr2.txt gps.txt mr3.txt comp.txt mr4.txt >js/mapresources.js')
