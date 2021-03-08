#include <iostream>

using namespace std;

int chercher(int x,int arr[],int n){
    for (int i = 0 ; i<n ; i++){
        if (arr[i]==x) return i ; 
    }

}
 int main(){
     int n ; 
     cin >> n ; 
     int arr[n],x=n,j=0; 
    for (int i= 0 ; i<n ; i++){
        cin >> arr[i] ; 
    }
    
    while (x > 0){
        if (chercher(x,arr,n) <= j ){
            cout << x +" " ;
            x-- ; 
        }else{
            cout << "\n" <<endl  ; 
            j++ ; 
        }
        
    }

}
