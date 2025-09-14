from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK 
from rest_framework.permissions import AllowAny 

from .models import TableType, TableMaterial


@api_view(['GET'])
@permission_classes([AllowAny])
def get_tables_type(request):
    return Response({'data': TableType.get_tables_list(request)}, HTTP_200_OK)


@api_view(['GET'])
@permission_classes([AllowAny])
def get_tables_material(request):
    return Response({'data': TableMaterial.get_tables_list(request)}, HTTP_200_OK)
